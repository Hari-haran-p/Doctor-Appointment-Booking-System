const { Sequelize , Datatypes } = require('sequelize');
const sequelize  = require('../config/database.js');
const users = require("./users.model.js");

const doctors = sequelize.define('doctors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: users,
            key: 'id',
        },
    }
})

doctors.afterSync((models, options)=>{
    doctors.create({name:"Kavinraj K", speciality:"Ortho", designation:"senior doctor", description:"experienced in ortho", contact:"9876543210", user_id:2})
})



sequelize.models.doctors;

module.exports = doctors;