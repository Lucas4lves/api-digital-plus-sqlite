'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn("vendas", "data_de_criacao", {
        type: Sequelize.STRING,
        allowNull: false
      })

      await queryInterface.changeColumn("vendas", "data_de_encerramento", {
        type: Sequelize.STRING,
        allowNull: true
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("vendas", "data_de_criacao", {
      type: Sequelize.DATE,
      allowNull: false,
    })
    
    await queryInterface.changeColumn("vendas", "data_de_encerramento", {
      type: Sequelize.DATE,
      allowNull: false,
    })

  }
};

/**
 *     data_de_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_de_encerramento:{
        type: Sequelize.DATE,
        allowNull: false,
    },
 */