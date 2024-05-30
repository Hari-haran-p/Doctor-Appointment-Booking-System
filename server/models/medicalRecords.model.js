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


sequelize.models.medicalRecords;
module.exports = medicalRecords;