import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/secret'

export function Login(req, res) {
  let { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter your email and password.',
    })
  }
  // Fixes upper case email mismatchs (See #26)
  email = email.toLowerCase()

  User.findOne({ email }, (err, user) => {
    // if error finding an user
    if (err) {
      return res.status(403).json({
        success: false,
        msg: err,
      })
    }
    // if no such user
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: 'Authentication failed. User not found.'
      })
    }
		// Check if password matches
    user.authenticate(password, (err2, isMatch) => {
      if (isMatch) {
      // Create token if the password matched and no error was thrown
        const token = jwt.sign({ email: user.email }, config.JwtSecret, {
          expiresIn: 5184000, // 60 days in seconds
        })
        return res.status(200).json({
          success: true,
          email: user.email,
          access_token: `JWT ${token}`,
        })
      }
      return 	res.status(401).json({
        success: false,
        msg: 'Authentication failed. Passwords did not match.',
      })
    })
  })
}

export function Logout(req, res) { res.json({ route: 'logout' }) }

export function Register(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      msg: 'Please enter your email and password.',
    })
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    provider: 'local',
  })
  user.save((err) => {
    if (err) {
      const parsedErr = parseValErr(err)
      return	res.status(403).json({
        success: false,
        msg: parsedErr,
      })
    }
    const token = jwt.sign({ email: user.email }, config.JwtSecret, {
      expiresIn: 10080, // a week in seconds
    })
    return res.status(201).json({
      success: true,
      email: user.email,
      access_token: `JWT ${token}`,
    })
  })
}

function parseValErr(err) {
  if (err.code === 11000) {
    return 'Email already in use.'
  } else if (typeof err.errors.email !== 'undefined') {
    return err.errors.email.message
  } else if (typeof err.errors.password !== 'undefined') {
    return err.errors.password.message
  }
  return 'Unknown error, please try again later'
}
