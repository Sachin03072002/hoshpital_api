const Patient = require('../../../models/patients');
const Doctor = require('../../../models/doctors');
const Report = require('../../../models/report');

module.exports.create_report = async function (req, res) {
    console.log('Inside report controller');
    const doctor = req.doctor._id;
    console.log('Dr:' + doctor);
    try {
        const report = await Report.create({
            doctor: doctor,
            patient: req.params.id,
            status: req.body.status
        });
        return res.status(200).json({
            success: true
        });
    } catch (err) {
        res.status(401).json({
            success: true,
            message: err.message,
        })
    }
}

module.exports.all_report = async function (req, res) {
    try {
        const reports = await Report.find({ "patient": req.params.id });
        return res.send(reports);
    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        });
    }
}

module.exports.report_by_status = async (req, res) => {
    console.log(req.params.status);
    console.log('hii');
    try {
        const reports = await Report.find({ "status": req.params.status });
        return res.send(reports);
    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}
