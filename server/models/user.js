var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    //required: 'Name is required',
    validate: [
      function(name) {
        return (name.length >= 2 && name.length <= 16);
      },
      'Name length should be between 2 and 16 characters'
    ]
  },
  email: {
    type: String,
    unique: true,
    index: true,
    match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    required: 'Email is required'
  },
  salt: {
    type: String
  },
  //provider is for third party login method such as wechat, weibo login.
  provider: {
    type: String,
    required: 'Provider is required'
  },
  providerId: String,
  providerData: {},
  password: {
    type: String,
    required: 'Password is required',
    validate: [
      function(password) {
        return password.length >= 6;
      },
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  }
}, { collection: 'User' });


UserSchema.pre('save', function(next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

UserSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueEmail = function(email, suffix, callback) {
  var _this = this;
  var possibleEmail = email + (suffix || '');

  _this.findOne({
    email: possibleEmail
  }, function(err, user) {
    if (!err) {
      if (!user) {
        callback(possibleEmail);
      } else {
        return _this.findUniqueEmail(email, (suffix || 0) + 1, callback);
      }
    } else {
      callback(null);
    }
  });
};
//Registering the User model
module.exports = mongoose.model('User', UserSchema);