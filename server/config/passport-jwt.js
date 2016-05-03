var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('mongoose').model('User'),
    config = require('./secret');

module.exports = function(passport) {
    passport.use(new JwtStrategy({
        jwtFromRequest : ExtractJwt.fromAuthHeader(),
        secretOrKey : config.JwtSecret
    },function(jwt_payload, done) {
        User.findOne({email: jwt_payload.email}, function(err, user) {
            if (err) return done(err, false);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};