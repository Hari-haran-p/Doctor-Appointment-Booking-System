const { Sequelize , Datatypes } = require('sequelize');
const sequelize  = require('../config/database.js');


const users = sequelize.define('users', {
    UserId: {
        type: Sequelize .INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    UserPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    UserRole: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


sequelize.models.users;

module.exports = users;