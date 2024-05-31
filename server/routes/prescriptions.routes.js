module.exports = app =>{
    const prescriptions = require("../controller/prescriptions.controller.js");

    var router = require('express').Router();

    router.get('/prescriptions/patient/:id', prescriptions.patient_findAll);

    router.get('/prescription/doctor',prescriptions.patient_findOne)

    app.use("/api", router);
    
}