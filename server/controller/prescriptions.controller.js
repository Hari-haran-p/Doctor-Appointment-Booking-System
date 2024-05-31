const { where } = require("sequelize");
const prescriptions =  require("../models/prescriptions.model.js");
const sequelize = require("../config/database.js");

exports.patient_findAll = async(req, res)=>{
    const id = req.params.id;
    try {
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE PatientId = ${id}`);
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async(req, res)=>{
    const id1 = req.query.id1;
    const id2 = req.query.id2;
    try {
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE PatientId = ${id1} AND DoctorId = ${id2}`);
        res.status(201).json({ success: true, prescription: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}