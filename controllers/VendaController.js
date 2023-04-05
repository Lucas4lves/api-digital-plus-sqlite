const VendaModel = require("../models/Venda");
const { formatarData, pegarVariaveisDeData, calcularLucro, deIso } = require("../utils/utils");
const dayjs = require("dayjs");


class VendaController
{
    static async cadastrar(req, res)
    {
        let { 
            data_de_criacao,
            data_de_encerramento,
            nome_cliente,
            nb,
            canal,
            status_pagamento,
            status_pedido,
            valor_recebido,
            custo,
            tipo,
            parceiro,
            observacoes
        } = req.body;

        if(!data_de_criacao || data_de_criacao.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo data de criação não pode estar vazio"})
        }
        

        if(!nome_cliente|| nome_cliente.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo nome do cliente não pode estar vazio"})
        }

        if(!nb|| nb.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo numero do benefício não pode estar vazio"})
        }

        if(!canal|| canal.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo canal não pode estar vazio"})
        }

        if(!valor_recebido || valor_recebido.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo valor recebido não pode estar vazio"})
        }

        if(!custo || custo.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo custo não pode estar vazio"});
        }

        if(!tipo || tipo.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo custo não pode estar vazio"});
        }

        if(!parceiro || parceiro.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo parceiro não pode estar vazio"})
        }

        let dataCriacaoFrag = pegarVariaveisDeData(data_de_criacao);
        let dataEncerramentoFrag = pegarVariaveisDeData(data_de_encerramento);

        let output = await VendaModel.create({
            data_de_criacao: formatarData(data_de_criacao),
            data_de_encerramento: formatarData(data_de_encerramento),
            dia_criacao: dataCriacaoFrag.dia || "",
            mes_criacao: dataCriacaoFrag.mes || "",
            ano_criacao: dataCriacaoFrag.ano || "",
            dia_encerramento: dataEncerramentoFrag.dia || "",
            mes_encerramento: dataEncerramentoFrag.mes || "",
            ano_encerramento: dataEncerramentoFrag.ano || "", 
            nome_cliente,
            nb,
            canal,
            status_pagamento: "pendente",
            status_pedido: "pendente",
            valor_recebido,
            custo,
            lucro: calcularLucro(valor_recebido, custo),
            tipo,
            parceiro,
            observacoes 
        })

        return res.status(200).json({saida: output});

    }

    static async deletar(req, res)
    {
        let { pk } = req.body;

        let vendaEncontrada = await VendaModel.findByPk(pk);

        if(!vendaEncontrada || vendaEncontrada.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "Não foi possível encontrar uma venda com esse id"});
        }

        await vendaEncontrada.destroy()

        return res.status(200).json({saida: vendaEncontrada})
    }

    static async editar(req, res)
    {
        let {
            pk, 
            data_de_encerramento,
            nome_cliente,
            nb,
            canal,
            status_pagamento,
            status_pedido,
            valor_recebido,
            custo,
            tipo,
            parceiro,
            observacoes
        } = req.body;
 
        let registroEditado = await VendaModel.findByPk(pk); 


            console.log(data_de_criacao, data_de_encerramento);

            registroEditado.set({
            data_de_encerramento: formatarData(data_de_encerramento),
            dia_criacao:data_de_criacao.split("/")[0],
            mes_criacao: data_de_criacao.split("/")[1],
            ano_criacao: data_de_criacao.split("/")[2],
            dia_encerramento: data_de_encerramento.split("/")[0] || "",
            mes_encerramento: data_de_encerramento.split("/")[1]|| "",
            ano_encerramento: data_de_encerramento.split("/")[2] || "", 
            nome_cliente,
            nb,
            canal,
            status_pagamento,
            status_pedido,
            valor_recebido,
            custo,
            lucro: calcularLucro(valor_recebido, custo),
            tipo,
            parceiro,
            observacoes
        })
       
        await registroEditado.save();

        return res.status(200).json({registroEditado});
    }

    static async pegarTodos(req, res)
    {
        let output = await VendaModel.findAll();
        if(!output || output.length <=0)
        {
            return res.status(400).json({erro: true, msg: "Não foi possível encontrar vendas"})
        }

        return res.status(200).json({output});
    }

}

module.exports = VendaController;