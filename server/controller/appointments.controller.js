const appointments = require("../models/appointments.model.js");
const sequelize = require("../config/database.js");


exports.patient_findAll = async(req, res)=>{
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE PatientId = ${id}`);
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async(req, res)=>{
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE AppointmentId = ${id}`);
        res.status(201).json({ success: true, appointment: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

