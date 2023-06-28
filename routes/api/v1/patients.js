const express = require("express");
const router = express.Router();
const PatientController = require('../../../controllers/api/v1/patients_api');
const { verifyToken } = require('../../../config/middleware');
console.log("router loaded 3");
router.post('/register', verifyToken, PatientController.register);

module.exports = router;
