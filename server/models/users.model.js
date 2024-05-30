const { Sequelize , Datatypes } = require('sequelize');
const sequelize  = require('../config/database.js');


const users = sequelize.define('users', {
    id: {
        type: Sequelize .INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


sequelize.models.users;

module.exports = users;