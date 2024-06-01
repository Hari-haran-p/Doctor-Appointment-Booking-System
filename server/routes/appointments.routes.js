module.exports = app =>{
    const appointments = require("../controller/appointments.controller.js");

    var router = require('express').Router();

    router.get('/appointments/patient/:id', appointments.patient_findAll);

    router.put('/appointment/patient/:id', appointments.cancelAppointment);

    router.get('/appointment/:id', appointments.patient_findOne);

    router.post('/appointment', appointments.create);

    app.use("/api", router);
    
}