require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const app = express();
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { ErrorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./utils/index');
const { httpLogger } = require('./utils/logger');

// security based middleware
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

// rate limit request
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, //limit each ip to 100 requests per windowMs
  })
);

// cors middleware
app.use(cors()); //prevent the unnecessary access

// parser middleware
app.use(express.json()); //parses the data to the json format
app.use(express.urlencoded({ extended: true })); //parse the x-www-form-urlencoded

// http logger
app.use(httpLogger(logger));

// route
app.get('/', (req, res, next) => {
  const customError = new Error('All fields required');
  customError.statusCode = 404;
  next(customError);
});

// global error handler middleware
app.use(ErrorHandler);

// running the server with the specified port number.
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
