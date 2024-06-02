const { where } = require("sequelize");
const prescriptions = require("../models/prescriptions.model.js");
const sequelize = require("../config/database.js");
const appointments = require("../models/appointments.model.js");

exports.patient_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE PatientId = ${id}`);
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.docotr_findOne= async(req, res)=>{
    const id1 = req.query.id1;
    try{
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE AppointmentId = ${id1}`);
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.doctor_findById =async(req, res)=>{
    const id = req.params.id;
    try{
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE DoctorId = ${id}`);
        res.status(201).json({ success: true, prescriptions: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async (req, res) => {
    const id1 = req.query.id1;
    // const id2 = req.query.id2;
    try {
        const [prescription] = await sequelize.query(`SELECT * FROM PrescriptionView WHERE AppointmentId = ${id1}`);
        res.status(201).json({ success: true, prescription: prescription });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.create = async (req, res) => {
    console.log(req.body);
    const { disease, prescription, prescriptionRemark, doctor, appointment, patient } = req.body;
    try {
        const prescriptionData = await prescriptions.create({
            Disease:disease,
            Prescription:prescription,
            PrescriptionRemark:prescriptionRemark,
            DoctorId: doctor.doctorId,
            PatientId:patient.patientId,
            AppointmentId:appointment.appointmentId
        });

        const appointmentData = await appointments.update({AppointmentStatus : "completed"}, {where : {AppointmentId : appointment.appointmentId}});

        console.log(prescriptionData.PrescriptionId);
        res.status(201).json({success:true, message:"Prescription added Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error");
    }

}