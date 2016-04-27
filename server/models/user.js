var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
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
    validate: [
      function(password) {
        return password.length >= 8;
      },
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now
  }
});


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

//Registering the User model
mongoose.model('User', UserSchema);