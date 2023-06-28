const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
    phone: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 10
    },
    name: {
        type: String,
        required: true,

    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
}, {
    timestamps: true
});
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;