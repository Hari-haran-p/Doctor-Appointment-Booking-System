const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");
const appointments = require("./appointments.model.js");


const prescriptions = sequelize.define('prescriptions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    disease: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prescription_remark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: doctors,
            key: 'id',
        },
    },
    patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: patients,
            key: 'id',
        },
    },
    appointment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: appointments,
            key: 'id',
        },
    }
})

// patients.afterSync((models, options)=>{
//     patients.create({name:"Sai Prashanth K", dob: "26-03-2001", gender:"Male", age: 22, blood_group:"B+", email: "saiprashanth.cs21@bitsathy.ac.in", mobile:"9876543200", address:"sathy, erode", user_id:1});
// })


sequelize.models.prescriptions;
module.exports = prescriptions;