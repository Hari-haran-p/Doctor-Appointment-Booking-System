module.exports = app =>{
    const doctors = require("../controller/doctors.controller.js");

    var router = require('express').Router();

    router.get('/doctors/', doctors.findAll);

    router.get('/doctor/:id', doctors.findOne);

    router.put('/doctor', doctors.update);

    app.use("/api", router);
    
}