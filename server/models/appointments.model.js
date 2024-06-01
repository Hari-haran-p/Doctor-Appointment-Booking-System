const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");
const medicalRecords = require('./medicalRecords.model.js');


const appointments = sequelize.define('appointments', {
    AppointmentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    AppointmentDate: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    AppointmentReason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    AppointmentStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    AppointmentHealthStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    AppointmentTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    AppointmentRemark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MedicalRecordStatus: {
        type: Sequelize.BOOLEAN,
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
    },
    MedicalRecordId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: medicalRecords,
            key: 'MedicalRecordId',
        },
    },
})



sequelize.models.appointments;
module.exports = appointments;