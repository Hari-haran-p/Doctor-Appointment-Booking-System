module.exports = app =>{
    const prescriptions = require("../controller/prescriptions.controller.js");

    var router = require('express').Router();

    router.get('/prescriptions/', prescriptions.findAll);

    app.use("/api", router);
    
}