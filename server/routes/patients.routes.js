module.exports = app =>{
    const patients = require("../controller/patients.controller.js");

    var router = require('express').Router();

    router.get('/patients/:id', patients.findAll);

    app.use("/api", router);
    
}