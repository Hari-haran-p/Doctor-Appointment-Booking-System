module.exports = app =>{
    const appointments = require("../controller/appointments.controller.js");

    var router = require('express').Router();

    router.get('/appointments/patient/:id', appointments.patient_findAll);

    app.use("/api", router);
    
}