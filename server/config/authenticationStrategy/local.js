var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
  passport.use(new LocalStrategy(function(email, password, done) {
    User.findOne({
      email: email
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      
      if (!user) {
        return done(null, false, {
          message: 'Unknown user'
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'Invalid password'
        });
      }
      
      return done(null, user);
      });
  }));
};