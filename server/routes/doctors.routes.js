module.exports = app =>{
    const doctors = require("../controller/doctors.controller.js");

    var router = require('express').Router();

    router.get('/doctors/', doctors.findAll);

    app.use("/api", router);
    
}