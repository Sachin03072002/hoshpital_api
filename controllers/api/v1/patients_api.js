const Patient = require("../../../models/patients");
exports.register = async (req, res) => {
    //get the doctor id
    const doctor = req.doctor._id;
    try {
        //destructuring the name and phone from body
        const { name, phone } = req.body;
        let patient;
        patient = await Patient.find({ phone });
        //if there is patient success if not then create
        if (patient.length > 0) {
            return res.status(200).json({
                success: true,
                body: patient[0]
            });
        }
        patient = await Patient.create({ name, phone, doctor });
        //return response
        return res.status(200).json({
            success: true,
            body: patient,
            message: 'Patient Registered Successfully'
        });
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "error Occured"
        });
    }
}