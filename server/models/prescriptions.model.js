const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");
const appointments = require("./appointments.model.js");


const prescriptions = sequelize.define('prescriptions', {
    PrescriptionId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Disease: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Prescription: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PrescriptionRemark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DoctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: doctors,
            key: 'DoctorId',
        },
    },
    PatientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: patients,
            key: 'PatientId',
        },
    },
    AppointmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: appointments,
            key: 'AppointmentId',
        },
    }
})



sequelize.models.prescriptions;
module.exports = prescriptions;