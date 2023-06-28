const express = require("express");
const router = express.Router();

console.log("router loaded 3");
router.use('/doctor_api', require('./doctors'));

module.exports = router;
