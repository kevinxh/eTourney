import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config/secret';

export function Login(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.json({
      success: false,
      msg: 'Please enter your email and password.',
    });
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    // if error finding an user
    if (err) {
      return res.json({
        success: false,
        msg: err,
      });
    }
    // if no such user
    if (!user) {
      return res.json({
        success: false,
        msg: 'Authentication failed. User not found.'
      });
    }
		// Check if password matches
    user.authenticate(req.body.password, (err2, isMatch) => {
      if (isMatch) {
      // Create token if the password matched and no error was thrown
        const token = jwt.sign({ email: user.email }, config.JwtSecret, {
          expiresIn: 10080, // a week in seconds
        });
        return res.json({
          success: true,
          email: user.email,
          access_token: `JWT ${token}`,
        });
      }
      return 	res.json({
        success: false,
        msg: 'Authentication failed. Passwords did not match.',
      });
    });

    // for default error return
    return res.json({
      success: false,
      msg: 'Something went wrong. Please contact the admins.'
    });
  });
}

export function Logout(req, res) { res.json({ route: 'logout' }); }

export function Register(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.json({
      success: false,
      msg: 'Please enter your email and password.',
    });
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    provider: 'local',
  });
  user.save((err) => {
    if (err) {
    // todo: we should parse the errs and translate into our language.
      return	res.json({
        success: false,
        msg: err,
      });
    }
    const token = jwt.sign({ email: user.email }, config.JwtSecret, {
      expiresIn: 10080, // a week in seconds
    });
    return res.json({
      success: true,
      email: user.email,
      access_token: `JWT ${token}`,
    });
  });
}
