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
const patients= require("./models/patients.js");


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
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

//sequlize connection 
sequelize.sync({force:false}).then(()=>console.log("SEQULIZED SUCESSFULLY >>>----->>>----->>>")).catch((err)=>console.log(err));

app.post('/api/doctor/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        // const data = await db.query('SELECT * FROM users WHERE username = ?', [username]).then((results) => {
        //     if (results.length === 0) {
        //         throw new Error('User not found');
        //     }
        //     const user = results[0];
        //     if (user.password !== password) {
        //         throw new Error('Incorrect password');
        //     }
        //     return user;
        // }).catch((error) => {
        //     if (error) {
        //         throw new Error('Error retrieving user from database');;
        //     }
        // })

        const user = await users.findOne({where : {username : username}});
        if(!user){
            throw new Error('User not found');
        }
        if(user.passowrd != password){
            throw new Error('Incorrect password');
        }
        console.log(data);
        db.query("SELECT * FROM doctors WHERE user_id = ?", [data.id]).then((result) => {
            if (result.length === 0) {
                throw new Error('User not found');
            }
            console.log(result);
            result[0].role = 'doctor';
            return res.status(201).json({ success: true, message: "Login successful", user: result });
        }).catch((error) => {
            console.log(error);
            if (error) {
                throw new Error('Error retrieving user from database');
            }
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.post('/api/user/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const data = await db.query('SELECT * FROM users WHERE username = ?', [username]).then((results) => {
            if (results.length === 0) {
                throw new Error('User not found');
            }
            const user = results[0];
            if (user.password !== password) {
                throw new Error('Incorrect password');
            }
            return user;
        }).catch((error) => {
            if (error) {
                throw new Error('Error retrieving user from database');;
            }
        })
        console.log(data);
        db.query("SELECT * FROM patients WHERE user_id = ?", [data.id]).then((result) => {
            if (result.length === 0) {
                throw new Error('User not found');
            }
            console.log(result);
            result[0].role = 'doctor';
            return res.status(201).json({ success: true, message: "Login successful", user: result });
        }).catch((error) => {
            if (error) {
                throw new Error('Error retrieving user from database');
            }
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.post("/api/register", async (req, res) => {
    try {
        const { patientName, patientDOB, patientGender, patientAge, patientBloodGroup, patientEmail, patientContactInfo, patientAddress, patientPassword } = req.body;
        const userInsertQuery = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
        const userResult = await db.query(userInsertQuery, [patientEmail, patientPassword, 'patient']).then((result) => {
            return result;
        }).catch((error) => {
            if (error) {
                console.error("Error inserting user:", error);
                throw new Error("some error");
            }
        })  

        console.log("userResult:", userResult);
        const userId = userResult.insertId;
        console.log("Inserted userId:", userId);

        if (!userId) {
            return res.status(500).json({ success: false, message: "Failed to retrieve user ID" });
        }
        const patientInsertQuery = "INSERT INTO patients (user_id, name, dob, gender, age, blood_group, email, mobile, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const imageAttachment = await readFile('./register.jpg');
        const htmlTemplate = await readFile("./mail.html",'utf-8');
        await db.query(patientInsertQuery, [userId, patientName, patientDOB, patientGender, patientAge, patientBloodGroup, patientEmail, patientContactInfo, patientAddress]).then((result) => {
            transporter.sendMail({
                from: 'vignesgleefc@gmail.com',
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
            res.status(201).json({ success: true, message: "User and patient registered successfully" });
        }).catch((error) => {
            if (error) {
                console.error("Error inserting patient:", error);
                throw new Error("Some error while adding user");
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while registering user" });
    }
});


app.listen(4000, () => {
    console.log(`Server running at 5000`);
});

