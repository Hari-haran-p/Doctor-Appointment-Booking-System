const patients = require("../models/patients.model.js");

exports.findAll = async (req, res) => {
    try {
        const patient = await patients.findAll();
        res.status(201).json({ success: true, patients: patient });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}