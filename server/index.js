require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const { ErrorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./utils/index');
const { httpLogger } = require('./utils/logger');
const Database = require('./config/database.js');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/auth/user.route.js');
const googleRoutes = require('./routes/auth/googleAuth.js');
const extraRoutes = require('./routes/extra.route.js');

// security based middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

// cors middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
); //prevent the unnecessary access

// instance of database
const db = new Database(process.env.MONGODB_URI);
// connection error for database connection
db.connect().catch((err) => {
  console.error(`Error connecting to the database:`, err);
});

// rate limit request
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit each ip to 100 requests per windowMs
  })
);

// parser middleware
app.use(express.json()); //parses the data to the json format
app.use(express.urlencoded({ extended: true })); //parse the x-www-form-urlencoded
app.use(cookieParser()); //for parsing cookie

// jwt and google auth strategy
require('./config/passport.js');
require('./config/google.passport.js');

// initializing the passport.js
app.use(passport.initialize());

// http logger
app.use(httpLogger(logger));

app.use('/auth/users', userRoutes);
app.use('/auth/google', googleRoutes);
app.use('/api', extraRoutes);

// global error handler middleware
app.use(ErrorHandler);

// running the server with the specified port number.
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
