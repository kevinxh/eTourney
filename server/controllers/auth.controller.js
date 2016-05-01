import User from '../models/user';
import passport from 'passport';

export function Login (req, res){ passport.authenticate('local')
};

export function Logout(req, res){ res.json({route:"logout"}); };

export function Register(req, res){

  if (!req.user) {

  	if (!req.body.email || !req.body.password) {
    	res.json({success: false, msg: 'Please include your email and password.'});
  	} else {
	    const user = new User({
	      email: req.body.email,
	      password: req.body.password,
	      provider: 'local'
	    });

	    user.save((err) => {
	      if (err) {
	        return res.json({success: false, err:err});
	      }
	      req.login(user, (err) => {
	        if (err) return next(err);
	        return res.json({success: true, email:user.email});
	      });
	    });
	}
  } else {
    return res.json({success: false, msg:'You already logged in.', email:req.user.email});
  }

};
