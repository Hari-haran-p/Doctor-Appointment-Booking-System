const { Sequelize, Datatypes } = require('sequelize');
const sequelize = require('../config/database.js');
const users = require("./users.model.js");


const patients = sequelize.define('patients', {
    PatientId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    PatientName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PatientAge: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PatientGender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientDOB: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientMobile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientBloodGroup: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PatientAccountStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:"true"
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: users,
            key: 'UserId',
        },
    }
})





sequelize.models.patients;
module.exports = patients;