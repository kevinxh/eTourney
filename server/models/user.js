import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: {
    type: String,
    // required: 'Name is required',
    validate: [
      (name) => (name.length >= 2 && name.length <= 16),
      'Name length should be between 2 and 16 characters',
    ]
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
    match: [/.+@.+\..+/, 'Please fill a valid e-mail address'],
    required: 'Email is required',
  },
  // provider is for third party login method such as wechat, weibo login.
  provider: {
    type: String,
    required: 'Provider is required',
  },
  providerId: String,
  providerData: {},
  password: {
    type: String,
    required: 'Password is required',
    validate: [
      (password) => (password.length >= 6),
      'Password should be longer'
    ]
  },
  created: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'User' });


UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    user.hashPassword(user.password, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  }
});

UserSchema.methods.hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return cb(err);
    return bcrypt.hash(password, salt, (hashErr, hash) => {
      if (hashErr) return cb(hashErr);
      return cb(null, hash);
    });
  });
};

// We cannot use ES6 arrow function here because scope problem
// Read more to search ES6 arrow function "this" scope
UserSchema.methods.authenticate = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

// Registering the User model
export default mongoose.model('User', UserSchema);
