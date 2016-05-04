const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('mongoose').model('User');
const config = require('./secret');

export default function (passport) {
  passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.JwtSecret,
  }, (jwtPayload, done) => {
    User.findOne({ email: jwtPayload.email }, (err, user) => {
      if (err) return done(err, false);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  }));
}
