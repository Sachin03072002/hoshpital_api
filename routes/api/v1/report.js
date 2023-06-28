const express = require("express");
const router = express.Router();
const reportController = require('../../../controllers/api/v1/report_api');
const { verifyToken } = require("../../../config/middleware");
console.log("router loaded 3");


router.post('/:id/create_report', verifyToken, reportController.create_report);
router.get('/:status', reportController.report_by_status);

module.exports = router;
