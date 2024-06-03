const {Sequelize } = require("sequelize");

const sequelize  = new Sequelize("Doctor", "root", "passsword", {
    host: 'db',
    dialect:'mysql'
});

module.exports=sequelize;