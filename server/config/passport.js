const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User.model');
const passport = require('passport');

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
};

// accessing the token from the http only cookie
var options = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

passport.use(
  new JwtStrategy(options, async function (jwt_payload, done) {
    try {
      const user = await User.findOne({ _id: jwt_payload.id });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (err) {
      return done(err, false);
    }
  })
);
