const ParceiroModel = require("../models/Parceiro");

module.exports = class ParceiroController
{
    static async cadastrar(req, res)
    {
        let { nome } = req.body;
        if(!nome || nome.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "O campo nome precisa ser preenchido!"
            });
        }
        
        let saida = await ParceiroModel.create({
            nome
        });

        return res.status(200).json({saida: saida});
    }

    static async editar(req, res)
    {
        let {pk} = req.body;

        if(!pk || pk.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "É necessário fornecer uma chave para editar o objeto"
            })
        }

        let saida = await ParceiroModel.findByPk(pk);
        
        if(!saida || saida.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível encontrar um parceiro com essa chave"
            })
        }
        return res.status(200).json({saida: saida});
    }

    static async deletar(req, res)
    {
        let {pk} = req.body;

        if(!pk || pk.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "É necessário fornecer uma chave para deletar o objeto"
            })
        }

        let saida = await ParceiroModel.findByPk(pk);
        
        if(!saida || saida.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível encontrar um parceiro com essa chave"
            })
        }
        await saida.destroy();
        return res.status(200).json({saida: saida});
    }

    static async pegarTodos(req, res)
    {
        let saida = await ParceiroModel.findAll();
        if(!saida || saida.length <= 0)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível encontrar parceiros no sistema"
            })
        }
        return res.status(200).json({
            saida
        })
    }
}