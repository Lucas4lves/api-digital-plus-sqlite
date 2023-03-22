'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("admins", {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      email: {type: Sequelize.INTEGER, unique: true, allowNull:false},
      senha: {type: Sequelize.INTEGER, allowNull: false}
    }, {timestamps: false}) 
    await queryInterface.createTable("vendas", {
    id: {type: Sequelize.INTEGER, primaryKey:true},
    data_de_criacao: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_de_encerramento:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    dia_criacao:{
        type: Sequelize.STRING,
    },
    mes_criacao :{
        type: Sequelize.STRING
    },
    ano_criacao : {
        type: Sequelize.STRING
    },
    dia_encerramento:{
        type: Sequelize.STRING,
    },
    mes_encerramento :{
        type: Sequelize.STRING
    },
    ano_encerramento : {
        type: Sequelize.STRING
    },
    nome_cliente:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nb:{
        type: Sequelize.STRING,
        allowNull: false
    },
    canal:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status_pagamento:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    status_pedido:{
        type: Sequelize.STRING,
    },
    valor_recebido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    custo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lucro: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    parceiro:{
        type: Sequelize.STRING,
        allowNull: false
    },
    observacoes :{
        type: Sequelize.STRING,
        allowNull: true
    }
    }, {timestamps : false})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("admins")
    await queryInterface.dropTable("vendas")
  }
};
