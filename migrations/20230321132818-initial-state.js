'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("parceiros", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        nome: { type: Sequelize.STRING, allowNull: false}
    }, {timestamps: false})
    
    await queryInterface.createTable("servicos", {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        tipo: { type: Sequelize.STRING, allowNull: false}
    }, {timestamps: false})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("parceiros");
    await queryInterface.dropTable("servicos");
  }
};
