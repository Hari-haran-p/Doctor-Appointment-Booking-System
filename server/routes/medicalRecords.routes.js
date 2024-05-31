module.exports = app =>{
    const medicalRecords = require("../controller/medicalRecords.controller.js");

    var router = require('express').Router();

    router.get('/medicalrecords/patient/:id', medicalRecords.patient_findAll);

    router.get('/medicalrecord/reception', medicalRecords.patient_findOne);

    app.use("/api", router);
    
}