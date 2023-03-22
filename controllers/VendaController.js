const VendaModel = require("../models/Venda");

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
       
        if(!data_de_encerramento || data_de_encerramento.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo data de encerramento não pode estar vazio"})
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

        if(status_pagamento == "")
        {
            return res.status(400).json({erro: true, msg: "O campo status pagamento não pode estar vazio"})
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

        const formatarData = (data) => {
            let [dia, mes, ano] = data.split("/");

            return new Date(`${ano}/${mes}/${dia}`);
        }

        const pegarVariaveisDeData = (data) => {
            let [dia, mes, ano] = data.split("/");
            return {dia, mes, ano};
        }

        const calcularLucro = (recebido, custo) => {
            let r = Number(recebido);
            let c = Number(custo);

            return (r - c).toFixed(2);
        }


        let dataCriacaoFrag = pegarVariaveisDeData(data_de_criacao);
        let dataEncerramentoFrag = pegarVariaveisDeData(data_de_encerramento);

        let output = await VendaModel.create({
            data_de_criacao: formatarData(data_de_criacao),
            data_de_encerramento: formatarData(data_de_encerramento),
            dia_criacao:dataCriacaoFrag.dia || "",
            mes_criacao: dataCriacaoFrag.mes || "",
            ano_criacao: dataCriacaoFrag.ano || "",
            dia_encerramento: dataEncerramentoFrag.dia || "",
            mes_encerramento: dataEncerramentoFrag.mes || "",
            ano_encerramento: dataEncerramentoFrag.ano || "", 
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
}

module.exports = VendaController;