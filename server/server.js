const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const db = require("./db.js");
const transporter = require("./config/email.js");
require('dotenv').config();
const sequelize = require("./config/database.js");
const users = require("./models/users.model.js")
const doctors = require("./models/doctors.model.js");
const patients = require("./models/patients.model.js");


//server app
const app = express();

// Specify the client URL in the CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client URL if different
    optionsSuccessStatus: 200 
  };
  
  // Apply CORS with the specified options
  app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Creating initial users for login in
async function syncAndAddUsersr() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const user1 = await users.findOne({ where: { username: "sai@gmail.com" } });
        if (!user1) {
            // Create a new user
            const newUser = await users.create({ username: "sai@gmail.com", password: "sai1234", role: "patient" });
            console.log('User 1 created:', newUser.username);
        }
        const user2 = await users.findOne({ where: { username: "kavin@gmail.com" } });
        if (!user2) {
            // Create a new user
            const newUser = await users.create({ username: "kavin@gmail.com", password: "kavin123", role: "doctor" });
            console.log('User created:', newUser.username);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}
async function syncAndAddDcotor() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const doctor = await doctors.findOne({ where: { name: "Kavinraj K" } });
        if (!doctor) {
            // Create a new user
            const newDoctor = await doctors.create({ name: "Kavinraj K", designation: "Senior doctor", qualification: "MBBS", mobile: "9754321781", address: "Sathy, erode", status: "Available", user_id: 2 });
            console.log('User created:', newDoctor.name);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}
async function syncAndAddPatient() {
    try {
        await sequelize.sync();
        // Check if the user already exists
        const patient = await patients.findOne({ where: { name: "Sai Prashanth K" } });
        if (!patient) {
            // Create a new user
            const newPatient = await patients.create({ name: "Sai Prashanth K", age: 22, gender: "male", dob: "26-03-2001", mobile: "9754321781", blood_group: "B+ve", address: "Sathy, erode", account_status: "true", user_id: 1 });
            console.log('User created:', newPatient.name);
        }
    } catch (error) {
        console.error('Error syncing or adding user:', error);
    }
}


//sequlize connection 
sequelize.sync({ force: false }).then(async() => {
    await syncAndAddUsersr();
    await syncAndAddDcotor();
    await syncAndAddPatient();
    console.log("SEQULIZED SUCESSFULLY >>>----->>>----->>>");
}).catch((err) => console.log(err));


//Doctor Login 
// app.post('/api/doctor/login', async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     try {
//         const user = await users.findOne({ where: { username: username } });
//         if (!user) {
//             throw new Error('User not found');
//         }
//         if (user.password != password) {
//             throw new Error('Incorrect password');
//         }
//         const doctor = await doctors.findOne({ where: { user_id: user.id } })
//         if (doctor.length === 0) {
//             throw new Error('User not found');
//         }
//         let result = { ...doctor.dataValues, role: 'doctor' };
//         console.log(result);
//         return res.status(201).json({ success: true, message: "Login successful", user: result });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// })

//User Login 
// app.post('/api/user/login', async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     try {
//         const user = await users.findOne({ where: { username: username } });
//         if (!user) {
//             throw new Error('User not found');
//         }
//         if (user.password != password) {
//             throw new Error('Incorrect password');
//         }
//         const patient = await patients.findOne({ where: { user_id: user.id } })
//         if (patient.length === 0) {
//             throw new Error('User not found');
//         }
//         let result = { ...patient.dataValues, role: 'patient' };
//         console.log(result);
//         return res.status(201).json({ success: true, message: "Login successful", user: result });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error.message);
//     }
// })

//User Registeration
// app.post("/api/register", async (req, res) => {
//     //Start a transcation as registering user invloes data creation in multiple tables;
//     const transaction = await sequelize.transaction();
//     try {
//         //Get form data from request
//         const { patientName, patientDOB, patientGender, patientAge, patientBloodGroup, patientEmail, patientContactInfo, patientAddress, patientPassword } = req.body;
//         //create user record in users table
//         const user = await users.create({
//             username: patientEmail,
//             password: patientPassword,
//             role: "patient"
//         }, {
//             transaction: transaction
//         });
//         console.log(user.id);
//         //with the user created create a patient table record
//         const patient = await patients.create(
//             {
//                 name: patientName,
//                 dob: patientDOB,
//                 gender: patientGender,
//                 age: patientAge,
//                 blood_group: patientBloodGroup,
//                 email: patientEmail,
//                 mobile: patientContactInfo,
//                 address: patientAddress,
//                 user_id: user.id,
//             }, {
//             transaction: transaction
//         });
//         //send a welcome email to customer via nodemailer
//         const imageAttachment = await readFile('./register.jpg');
//         const htmlTemplate = await readFile("./mail.html", 'utf-8');
//         transporter.sendMail({
//             from: process.env.EMAIL_ID,
//             to: patientEmail,
//             subject: 'Sucessfully registered...!!',
//             html: htmlTemplate.replace("${recipientName}", patientName),
//             attachments: [{
//                 filename: 'register.jpg',
//                 content: imageAttachment,
//                 encoding: 'base64',
//                 cid: 'RegisterImage'
//             }],
//         }).then(info => {
//             console.log('Email sent:', info.messageId);
//         }).catch(error => {
//             console.error('Error:', error);
//         });
//         //after completion of all process commit the tarnsaction
//         await transaction.commit();
//         res.status(201).json({ success: true, message: "User and patient registered successfully" });
//     } catch (err) {
//         //Rollback transaction if any error happens and send response
//         await transaction.rollback();
//         console.error(err);
//         res.status(500).json({ success: false, message: "An error occurred while registering user" });
//     }
// });

require("./routes/doctors.routes.js")(app)
require("./routes/patients.routes.js")(app)
require("./routes/appointments.routes.js")(app)
require("./routes/medicalRecords.routes.js")(app)
require("./routes/prescriptions.routes.js")(app)
require("./routes/auth.routes.js")(app)

app.listen(4000, () => {
    console.log(`Server running at 4000`);
});

