const { Sequelize } = require('sequelize');
const sequelize  = require('../config/database.js');
const doctors = require("./doctors.model.js");
const patients = require("./patients.model.js");


const appointments = sequelize.define('appointments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    health_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    remark: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medical_record_status: {
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


sequelize.models.appointments;
module.exports = appointments;