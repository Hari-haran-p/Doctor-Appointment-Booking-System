const appointments = require("../models/appointments.model.js");

exports.patient_findAll = async(req, res)=>{
    const id = req.params.id;
    try {
        const appointment = await appointments.findAll({where : {patient_id : id}});
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

