var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientInfo = new Schema({
    pName: String,
    fatherName: String,
    age: Number,
    date: Number,
    treatment: String,
    opd: String
})

var patientData = mongoose.model("patients", PatientInfo)
module.exports = patientData;