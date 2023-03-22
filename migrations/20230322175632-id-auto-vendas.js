'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn("vendas", "id", {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
     queryInterface.changeColumn("vendas", "id", {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: true
    })
   
  }
};
