module.exports = app =>{
    const patients = require("../controller/patients.controller.js");

    var router = require('express').Router();

    router.get('/patients/:id', patients.findOne);

    router.get('/patients/', patients.findAll);

    app.use("/api", router);
    
}