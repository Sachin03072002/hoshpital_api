const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctors');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new JWTStrategy(opts, function (jwtPayload, done) {
    Doctor.findById(jwtPayload._id, function (err, doctor) {
        if (err) {
            console.log('error in finding the doctor from jwt');
            return done(err, false);
        }
        if (doctor) {
            return done(null, doctor);
        } else {
            return done(null, false);
        }
    });
}));

module.exports = passport;
