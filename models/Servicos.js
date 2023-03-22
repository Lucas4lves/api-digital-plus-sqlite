const db = require("../db");
const { DataTypes } = require("sequelize");

const Servico = db.define("servico", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tipo: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false});

module.exports = Servico;