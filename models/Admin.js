const db = require("../db");
const { Sequelize } = require("sequelize");

const Admin = db.define("admin", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: Sequelize.STRING, unique: true, allowNull: false},
    senha : {type: Sequelize.STRING, allowNull: false}

}, {timestamps: false});

module.exports = Admin;