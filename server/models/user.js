var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        validate: [
            function(name) {return (name.length >= 2 && name.length <= 16);},
            'Name length should be between 2 and 16 characters'
        ]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
        match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
        required: 'Email is required'
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
            function(password) {return password.length >= 6;},
        'Password should be longer'
        ]
    },
    created: {
        type: Date,
        default: Date.now
    }
}, { collection: 'User' });


UserSchema.pre('save', function(next) {
    var user = this;

    if (user.isModified('password') || user.isNew) {
        user.hashPassword(user.password, function(err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        });
    }
});

UserSchema.methods.hashPassword = function(password, cb) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err)  return cb(err);
        bcrypt.hash(password, salt, function(err, hash) {
            if (err)  return cb(err);
            return cb(null, hash);
        });
    });
};

UserSchema.methods.authenticate = function(password, cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//Registering the User model
module.exports = mongoose.model('User', UserSchema);