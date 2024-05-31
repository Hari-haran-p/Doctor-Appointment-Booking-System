const medicalRecords = require("../models/medicalRecords.model.js");

exports.patient_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const medicalRecord = await medicalRecords.findAll({where : {PatientId : id}});
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async(req, res)=>{
    const id1 = req.query.id1;
    const id2 = req.query.id2;
    try{
        const medicalRecord = await medicalRecords.findOne({where : {PatientId : id1, DoctorId: id2}});
        res.status(201).json({ success: true, medicalRecord: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}