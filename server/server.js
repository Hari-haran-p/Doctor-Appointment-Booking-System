const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const db = require("./db.js");
const transporter = require("./config/email.js");
require('dotenv').config();
const sequelize = require("./config/database.js");
const users = require("./models/users.js")
const doctors = require("./models/doctors.js");
const patients = require("./models/patients.js");


//file reader
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

//server app
const app = express();

//app configurations
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database connect check
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL');
// });

//sequlize connection 
sequelize.sync({ force: false }).then(() => console.log("SEQULIZED SUCESSFULLY >>>----->>>----->>>")).catch((err) => console.log(err));


//Doctor Login 
app.post('/api/doctor/login', async (req, res) => {
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
})

//User Login 
app.post('/api/user/login', async (req, res) => {
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
})

//User Registeration
app.post("/api/register", async (req, res) => {
    //Start a transcation as registering user invloes data creation in multiple tables;
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
        const imageAttachment = await readFile('./register.jpg');
        const htmlTemplate = await readFile("./mail.html", 'utf-8');
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
});

app.listen(4000, () => {
    console.log(`Server running at 5000`);
});

