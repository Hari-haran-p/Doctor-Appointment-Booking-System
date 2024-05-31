const { Sequelize , Datatypes } = require('sequelize');
const sequelize  = require('../config/database.js');
const users = require("./users.model.js");

const doctors = sequelize.define('doctors', {
    DoctorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    DoctorName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DoctorDesignation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DoctorQualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DoctorMobile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DoctorAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DoctorStatus: {
        type: Sequelize.STRING,
        allowNull: false
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




sequelize.models.doctors;

module.exports = doctors;