const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password@1234',
    database: 'Doctor',
    port: 3306
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?', [username], (error, results, fields) => {
        if (error) {
            res.status(500).send('Error retrieving user from database');
            return;
        }
        if (results.length === 0) {
            res.status(401).send('User not found');
            return;
        }
        const user = results[0];
        if (user.password !== password) {
            res.status(401).send('Incorrect password');
            return;
        }
        res.status(201).json({ success: true, message: "Login successful" });
    });
})

app.post("/register", async (req, res) => {
    try {
        const { patientName, patientDOB, patientGender, patientAge, patientEmail, patientContactInfo, patientAddress, patientPassword } = req.body;
        const userInsertQuery = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
        db.query(userInsertQuery, [patientEmail, patientPassword, 'patient'], (err, userResult) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json({ success: false, message: "An error occurred while registering user" });
            }

            console.log("userResult:", userResult);

            const userId = userResult.insertId;
            console.log("Inserted userId:", userId);

            if (!userId) {
                return res.status(500).json({ success: false, message: "Failed to retrieve user ID" });
            }
            const patientInsertQuery = "INSERT INTO patients (user_id, name, dob, gender, age, email, mobile, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            db.query(patientInsertQuery, [userId, patientName, patientDOB, patientGender, patientAge, patientEmail, patientContactInfo, patientAddress], (err, patientResult) => {
                if (err) {
                    console.error("Error inserting patient:", err);
                    return res.status(500).json({ success: false, message: "An error occurred while registering patient" });
                }

                res.status(201).json({ success: true, message: "User and patient registered successfully" });
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "An error occurred while registering user" });
    }
});



app.listen(4000, () => {
    console.log(`Server running at 4000`);
});

