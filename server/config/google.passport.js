const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('../models/User.model.js');
const jwt = require('jsonwebtoken');

passport.use(
  new GoogleStrategy(
    {
      callbackURL: 'http://localhost:8081/auth/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // search user
        const user = await User.findOne({ googleId: profile.id });

        // condition for user exists
        if (!user) {
          // if user does not exists create a new user
          user = new User({
            username: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value,
          });

          await newUser.save();
        }

        const payload = { email: user.email, id: user._id };

        // generate a jwt token for the user
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: '6h',
        });

        done(null, { user, token });
      } catch (err) {
        done(err, null);
      }
    }
  )
);
