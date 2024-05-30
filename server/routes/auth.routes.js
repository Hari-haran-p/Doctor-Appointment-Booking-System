module.exports = app =>{
    const auth = require("../controller/auth.controller");

    var router = require('express').Router();

    router.post("/user/login", auth.user_login);

    router.post("/doctor/login", auth.doctor_login);

    router.post("/register", auth.register);

    app.use("/api", router);
}