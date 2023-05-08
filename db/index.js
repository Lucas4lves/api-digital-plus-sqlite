const Sequelize = require("sequelize");

const sequelize = new Sequelize('teste', 'root','runrunrun64@', {
    host:'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;