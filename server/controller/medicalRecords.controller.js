const medicalRecords = require("../models/medicalRecords.model.js");

exports.patient_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const medicalRecord = await medicalRecords.findAll({where : {patient_id : id}});
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}