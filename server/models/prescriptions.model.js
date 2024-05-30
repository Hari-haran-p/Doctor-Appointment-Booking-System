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



sequelize.models.prescriptions;
module.exports = prescriptions;