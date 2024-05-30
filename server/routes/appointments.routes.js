module.exports = app =>{
    const appointments = require("../controller/appointments.controller.js");

    var router = require('express').Router();

    router.get('/appointments/', appointments.findAll);

    app.use("/api", router);
    
}