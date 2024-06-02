module.exports = app =>{
    const medicalRecords = require("../controller/medicalRecords.controller.js");

    var router = require('express').Router();

    router.get('/medicalrecords/patient/:id', medicalRecords.patient_findAll);

    router.get('/medicalrecords/patient/last/:id', medicalRecords.findLatest);

    router.get('/medicalrecord/reception', medicalRecords.patient_findOne);

    router.get('/medicalrecord/doctor/:id', medicalRecords.doctor_findAll)

    router.post('/medicalrecord', medicalRecords.create);

    app.use("/api", router);
    
}