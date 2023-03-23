const db = require("../db/index");
const Sequelize = require("sequelize");

const Parceiro = db.define("parceiro", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    nome: {type: Sequelize.STRING, allowNull: false} 
},
{timestamps: false})

module.exports = Parceiro;