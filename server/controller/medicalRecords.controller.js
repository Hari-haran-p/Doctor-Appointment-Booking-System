const sequelize = require("../config/database.js");
const medicalRecords = require("../models/medicalRecords.model.js");
const appointments = require("../models/appointments.model.js");

exports.patient_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const medicalRecord = await medicalRecords.findAll({ where: { PatientId: id } });
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.doctor_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const [medicalRecord] = await sequelize.query(`SELECT * FROM MedicalRecordView WHERE DoctorId = ${id}`);
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.findLatest = async (req, res) => {
    const id = req.params.id;
    try {
        const medicalRecord = await medicalRecords.findOne({ where: { PatientId: id }, order: [['createdAt', 'DESC']], limit: 1 });
        res.status(201).json({ success: true, medicalRecords: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async (req, res) => {
    const id1 = req.query.id1;
    try {
        const medicalRecord = await medicalRecords.findOne({ where: { MedicalRecordId: id1 } });
        console.log(medicalRecord);
        res.status(201).json({ success: true, medicalRecord: medicalRecord });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}


exports.create = async (req, res) => {
    console.log(req.body);
    const { height, weight, pressure, temperature, symptoms, medications, treatment, medicalRecordRemark, appointmentId, doctorId, patientId } = req.body;
    try {
        const medicalrecord = await medicalRecords.create({
            Height: height,
            Weight: weight,
            Pressure: pressure,
            Temperature: temperature,
            MedicalRecordRemark: medicalRecordRemark,
            Symptoms: symptoms,
            Medications: medications,
            Treatments: treatment,
            PatientId: patientId,
            DoctorId: doctorId
        })
        console.log(medicalrecord.MedicalRecordId);
        const data = await appointments.update({
            MedicalRecordStatus: true,
            MedicalRecordId: medicalrecord.MedicalRecordId
        }, {
            where: { AppointmentId: appointmentId }
        })
        console.log(data);
        res.status(201).json({ success: true, message: "Medical Record created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Some internal Error");
    }
}


exports.update = async (req, res) => {
    const { Id, Height, Weight, Pressure, Temperature, Medications, Symptoms, MedicalRecordremark, Treatments } = req.body;
    try {
        const medicalrecord = await medicalRecords.update({
            Height: Height,
            Weight: Weight,
            Pressure: Pressure,
            Temperature: Temperature,
            MedicalRecordRemark: MedicalRecordremark,
            Symptoms: Symptoms,
            Medications: Medications,
            Treatments: Treatments,
        }, {
            where: { MedicalRecordId: Id }
        })
        res.status(201).json({ success: true, message: "Medical Record created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Some internal Error");
    }
}