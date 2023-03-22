const db = require("../db");
const { DataTypes } = require("sequelize");

const Parceiro = db.define("parceiro", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome : {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false});

module.exports = Parceiro;