const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");


const medicalRecords = sequelize.define('medicalRecords', {
    MedicalRecordId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Height: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Weight: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Pressure: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Temperature: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MedicalRecordRemark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Symptoms: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Medications: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Treatments: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: patients,
            key: 'PatientId',
        },
    },
    DoctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: doctors,
            key: 'DoctorId',
        },
    }
})


sequelize.models.medicalRecords;
module.exports = medicalRecords;