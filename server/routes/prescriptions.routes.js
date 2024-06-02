module.exports = app =>{
    const prescriptions = require("../controller/prescriptions.controller.js");

    var router = require('express').Router();

    router.get('/prescriptions/patient/:id', prescriptions.patient_findAll);

    router.get('/prescriptions/doctor', prescriptions.docotr_findOne);

    router.get('/prescription/doctor',prescriptions.patient_findOne);

    router.get('/prescription/doctor/:id',prescriptions.doctor_findById);

    router.post('/prescription', prescriptions.create);

    app.use("/api", router);
    
}