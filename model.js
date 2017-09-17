var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientInfo = new Schema({
    PName: String,
    // FatherName: String,
    // Age: Number,
    // Date: Number,
    // TREATMENT: String,
    // OPD: String
})

var patientData = mongoose.model("patients", PatientInfo)
module.exports = patientData;