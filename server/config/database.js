const {Sequelize } = require("sequelize");

const sequelize  = new Sequelize("Doctor", "root", null, {
    host: 'localhost',
    dialect:'mysql'
});



module.exports=sequelize;