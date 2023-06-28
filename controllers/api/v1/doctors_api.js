const Doctor = require('../../../models/doctors');
const jwt = require('jsonwebtoken');
module.exports.register = async function (req, res) {
    console.log('register', req.body);
    try {
        const doctor = await Doctor.create(req.body);

        return res.status(200).json({
            success: true,
            message: doctor
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "No email or password",
            });
        }
        let doctor = await Doctor.findOne({ email: email });
        if (!doctor) {
            return res.status(401).json({
                success: false,
                message: "Invalid Username or Password",
            });
        }
        const isMatch = await doctor.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Username and Password",
            });
        }
        const token = doctor.getSignedJwtToken();
        console.log(token);
        res.status(200).json({
            success: true,
            message: `Log in successfully~ keep the token safely ${doctor.username}~`,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: "Error Occurred",
        });
    }
};
