const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const doctorSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
// encrypt password
// here we will use bcrypt library to save password in incrypted manner in database
doctorSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// sign jwt and return 
doctorSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, 'secret', {
        expiresIn: '120m'
    });
};


//we are using bcrypt library, another function of checking the password entered with the password in database
doctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);

};

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;