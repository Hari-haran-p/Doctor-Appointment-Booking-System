const appointments = require("../models/appointments.model.js");
const sequelize = require("../config/database.js");
const { where } = require("sequelize");
const patients = require("../models/patients.model.js");
const users = require("../models/users.model.js");


//file reader
const { promisify } = require('util');
const fs = require("fs");
const readFile = promisify(fs.readFile);
const transporter = require("../config/email.js");

exports.patient_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE PatientId = ${id}`);
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.doctor_findAll = async (req, res) => {
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE DoctorId = ${id}`);
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}


exports.doctor_findToday= async(req, res)=>{
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE DoctorId = ${id} AND DATE(AppointmentDate) = CURDATE()`);
        res.status(201).json({ success: true, appointments: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.patient_findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const [appointment] = await sequelize.query(`SELECT * FROM AppointmentView WHERE AppointmentId = ${id}`);
        res.status(201).json({ success: true, appointment: appointment });
    } catch (error) {
        console.log(error);
        res.status(500).send("some error fetching data");
    }
}

exports.create = async (req, res) => {
    console.log(req.body);
    const { appointmentStatus, appointmentRemark, medicalrecordStatus, patient, doctor, appointmentDate, appointmentTime, appointmentReason } = req.body;
    console.log(medicalrecordStatus);
    try {
        const appointmentData = await appointments.findAll();
        const data = appointmentData.filter((d)=>d.DoctorId == doctor.DoctorId && d.AppointmentDate == appointmentDate && d.AppointmentTime == appointmentTime);
        console.log(data);
        if(data.length > 0){
            return res.status(500).json({message : "Doctor already has appointment on the selected time"});
        }
        const appointment = await appointments.create({
            AppointmentDate: appointmentDate,
            AppointmentReason: appointmentReason,
            AppointmentStatus: appointmentStatus,
            AppointmentHealthStatus: appointmentStatus,
            AppointmentTime: appointmentTime,
            AppointmentRemark: appointmentRemark,
            MedicalRecordStatus: medicalrecordStatus,
            PatientId: patient.PatientId,
            DoctorId: doctor.DoctorId,
        })
        const patientData = await patients.findByPk(patient.PatientId);
        const userData = await users.findByPk(patientData.UserId);

        const imageAttachment = await readFile('./assets/images/appointment.jpg');
        const htmlTemplate = await readFile("./assets/mail/appointment.html", 'utf-8');
        const placeholders = {
            PatientName:  patient.PatientName,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
        };
        function replacePlaceholders(template, placeholders) {
            return template.replace(/\$\{(\w+)\}/g, (_, key) => placeholders[key] || '');
        }
        transporter.sendMail({
            from: "support@doctorapp.com",
            to: "user@myapp.com",
            subject: 'Appointment Booked..!!',
            html: replacePlaceholders(htmlTemplate, placeholders),
            attachments: [{
                filename: 'register.jpg',
                content: imageAttachment,
                encoding: 'base64',
                cid: 'AppImage'
            }],
        }).then(info => {
            console.log('Email sent:', info.messageId);
        }).catch(error => {
            console.error('Error:', error);
        });
        res.status(201).json({ success: true, message: "Appointment Booked Sucessfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Internal Error");
    }
}


exports.cancelAppointment = async (req, res) => {
    const id = req.params.id;
    const reason = req.query.reason;

    try {
        const appointment = await appointments.update({ AppointmentStatus: "cancelled", AppointmentRemark: reason },
            { where: { AppointmentId: id } })
        res.status(201).json({ success: true, message: "Appointment Cancelled Sucessfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Some Internal Error");
    }
}
