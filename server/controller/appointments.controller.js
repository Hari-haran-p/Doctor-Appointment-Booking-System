const appointments = require("../models/appointments.model.js");

exports.findAll = async(req, res)=>{
    try {
        const appointment = await appointments.findAll();
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

