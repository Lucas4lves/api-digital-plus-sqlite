'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [{
      email: "exemplo@email",
      senha: "123"
    }])

    await queryInterface.bulkInsert('parceiros', [{
      nome: "joão carlos",
    },
    {
      nome: "bruna araújo",
    }])

    await queryInterface.bulkInsert('servicos', [{
      tipo: "desbloqueio",
    },
    {
      tipo: "bot-de-whatsapp",
    }])

    await queryInterface.bulkInsert('vendas', [{
      data_de_criacao: "08/03/2023",
      data_de_encerramento :"",
      nome_cliente: "Marcelo",
      nb : "12345922",
      canal: "Construtora NS",
      status_pagamento : "pendente",
      status_pedido: "pendente",
      valor_recebido: "500",
      custo: "80.79" ,
      lucro : "100",
      tipo: "desbloqueio",
      parceiro: "bruna araújo",
      observacoes: "obs obs"
    },
    {
      data_de_criacao: "16/03/2019",
      data_de_encerramento :"",
      nome_cliente: "Solange",
      nb : "9797865",
      canal: "Depósitos S.A",
      status_pagamento : "pendente",
      status_pedido: "pendente",
      valor_recebido: "8000",
      custo: "80.79" ,
      lucro : "100",
      tipo: "desbloqueio",
      parceiro: "joão carlos",
      observacoes: "segue o plano"
    },
    {
      data_de_criacao: "15/03/2017",
      data_de_encerramento :"",
      nome_cliente: "Lucas",
      nb : "36478234",
      canal: "Depósitos S.A",
      status_pagamento : "pendente",
      status_pedido: "pendente",
      valor_recebido: "8000",
      custo: "80.79" ,
      lucro : "100",
      tipo: "desbloqueio",
      parceiro: "bruna araújo",
      observacoes: "segue o plano"
    },
    {
      data_de_criacao: "20/03/2022",
      data_de_encerramento :"",
      nome_cliente: "Mateus",
      nb : "236235162",
      canal: "Depósitos S.A",
      status_pagamento : "pendente",
      status_pedido: "pendente",
      valor_recebido: "150",
      custo: "80.79" ,
      lucro : "100",
      tipo: "desbloqueio",
      parceiro: "joão carlos",
      observacoes: "segue o plano"
    }
  
  ])


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
    await queryInterface.bulkDelete('parceiros', null, {});
    await queryInterface.bulkDelete('vendas', null, {});
    await queryInterface.bulkDelete('servicos', null, {});
  }
};
