const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");


const medicalRecords = sequelize.define('medicalRecords', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    weight: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pressure: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    medical_record_mark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    symptoms: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medications: {
        type: Sequelize.STRING,
        allowNull: false
    },
    treatments: {
        type: Sequelize.STRING,
        allowNull: false
    },
    patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: patients,
            key: 'id',
        },
    },
    doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: doctors,
            key: 'id',
        },
    }
})

patients.afterSync((models, options)=>{
    patients.create({name:"Sai Prashanth K", dob: "26-03-2001", gender:"Male", age: 22, blood_group:"B+", email: "saiprashanth.cs21@bitsathy.ac.in", mobile:"9876543200", address:"sathy, erode", user_id:1});
})


sequelize.models.medicalRecords;
module.exports = medicalRecords;