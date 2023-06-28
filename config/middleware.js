const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctors');
exports.verifyToken = async (req, res, next) => {
    console.log("Bearer Token" + req.headers['authorization']);
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" "[1]);
        console.log("Token " + token);
        req.token = token;
    }
    if (!token) {
        console.log("Token error");
        return res.status(401).josn({
            success: false,
            message: "Unauthorized access"
        });
    }
    try {
        const decoded = await jwt.verify(token, 'secret');
        console.log("Decoded Token: " + decoded);
        req.doctor = await Doctor.findById(decoded.id);
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        });
    }

}
