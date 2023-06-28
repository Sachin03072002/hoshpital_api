const express = require("express");
const router = express.Router();
const PatientController = require('../../../controllers/api/v1/patients_api');
const reportController = require('../../../controllers/api/v1/report_api');
const { verifyToken } = require('../../../config/middleware');
console.log("router loaded 3");
router.post('/register', verifyToken, PatientController.register);
router.post('/:id/create_report', verifyToken, reportController.create_report);
router.get('/:id/all_report', reportController.all_report);


module.exports = router;
