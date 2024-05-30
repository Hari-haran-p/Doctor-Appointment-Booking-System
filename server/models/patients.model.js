const { Sequelize, Datatypes } = require('sequelize');
const sequelize = require('../config/database.js');
const users = require("./users.model.js");


const patients = sequelize.define('patients', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false
    },
    blood_group: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    account_status: {
        type: Sequelize.BOOLEAN,
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

// patients.afterSync((models, options)=>{
//     patients.create({name:"Sai Prashanth K", dob: "26-03-2001", gender:"Male", age: 22, blood_group:"B+", email: "saiprashanth.cs21@bitsathy.ac.in", mobile:"9876543200", address:"sathy, erode", user_id:1});
// })





sequelize.models.patients;
module.exports = patients;