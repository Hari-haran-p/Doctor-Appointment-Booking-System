const medicalRecords = require("../models/medicalRecords.model.js");

exports.findAll = async (req, res) => {
    try {
        const medicalRecord = await medicalRecords.findAll();
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}