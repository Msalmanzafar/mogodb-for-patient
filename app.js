const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const patientData = require('./model')

// mongoose.connect('mogodb://localhost/users' )
mongoose.connect("mongodb://abc:abc@ds141274.mlab.com:41274/patient", {
    useMongoClient: true
})

var db = mongoose.connection;

mongoose.Promise = global.Promise

app.use(bodyparser.json())

app.get('/', function (req, res, next) {
    //   console.log('/ path success')
    res.send('Pateint Tracker App')
})

app.get('/Details', function (req, res, next) {
    patientData.find({})
        .then((data) => {
            res.send(data)
        })
})

app.post('/addpatient', function (req, res, next) {
    patientData.create(req.body)
        .then((data) => {
            console.log(req.body)
            res.send('success ==>' + data);
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = app




