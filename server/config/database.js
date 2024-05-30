const {Sequelize } = require("sequelize");

const sequelize  = new Sequelize("Doctor", "root", "password", {
    host: 'db',
    dialect:'mysql'
});

module.exports=sequelize;