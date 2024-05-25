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


// users.afterSync((model, options)=>{
//     users.create({username:"saiprashanth.cs21@bitsathy.ac.in", password:"Saik@1293", role:"patient"});
//     users.create({username:"kavin@gmail.com", password:"kavin123", role:"doctor"});
// })

sequelize.models.users;

module.exports = users;