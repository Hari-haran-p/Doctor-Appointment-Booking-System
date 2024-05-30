const users = require("../models/users.model");
const doctors = require("../models/doctors.model");
const patients = require("../models/patients.model");
const sequelize = require("../config/database")
require('dotenv').config();


//file reader
const { promisify } = require('util');
const fs = require("fs");
const readFile = promisify(fs.readFile);
const transporter = require("../config/email.js");

exports.user_login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = await users.findOne({ where: { username: username } });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password != password) {
            throw new Error('Incorrect password');
        }
        const patient = await patients.findOne({ where: { user_id: user.id } })
        if (patient.length === 0) {
            throw new Error('User not found');
        }
        let result = { ...patient.dataValues, role: 'patient' };
        console.log(result);
        return res.status(201).json({ success: true, message: "Login successful", user: result });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.doctor_login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await users.findOne({ where: { username: username } });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password != password) {
            throw new Error('Incorrect password');
        }
        const doctor = await doctors.findOne({ where: { user_id: user.id } })
        if (doctor.length === 0) {
            throw new Error('User not found');
        }
        let result = { ...doctor.dataValues, role: 'doctor' };
        console.log(result);
        return res.status(201).json({ success: true, message: "Login successful", user: result });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.register = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        //Get form data from request
        const { patientName, patientDOB, patientGender, patientAge, patientBloodGroup, patientEmail, patientContactInfo, patientAddress, patientPassword } = req.body;
        //create user record in users table
        const user = await users.create({
            username: patientEmail,
            password: patientPassword,
            role: "patient"
        }, {
            transaction: transaction
        });
        console.log(user.id);
        //with the user created create a patient table record
        const patient = await patients.create(
            {
                name: patientName,
                dob: patientDOB,
                gender: patientGender,
                age: patientAge,
                blood_group: patientBloodGroup,
                email: patientEmail,
                mobile: patientContactInfo,
                address: patientAddress,
                user_id: user.id,
            }, {
            transaction: transaction
        });
        //send a welcome email to customer via nodemailer
        const imageAttachment = await readFile('../register.jpg');
        const htmlTemplate = await readFile("../mail.html", 'utf-8');
        transporter.sendMail({
            from: process.env.EMAIL_ID,
            to: patientEmail,
            subject: 'Sucessfully registered...!!',
            html: htmlTemplate.replace("${recipientName}", patientName),
            attachments: [{
                filename: 'register.jpg',
                content: imageAttachment,
                encoding: 'base64',
                cid: 'RegisterImage'
            }],
        }).then(info => {
            console.log('Email sent:', info.messageId);
        }).catch(error => {
            console.error('Error:', error);
        });
        //after completion of all process commit the tarnsaction
        await transaction.commit();
        res.status(201).json({ success: true, message: "User and patient registered successfully" });
    } catch (err) {
        //Rollback transaction if any error happens and send response
        await transaction.rollback();
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while registering user" });
    }
}