const ServicoModel = require("../models/Servicos");

class ServicoController
{
    static async cadastrar(req, res)
    {
        let {tipo} = req.body;
        if(!tipo || tipo.length <= 0 || typeof tipo != 'string')
        {
            return res.status(400).json({
                error: true, 
                msg: "O campo tipo está em branco ou está inválido"
            })
        }
        let output = await ServicoModel.create({
            tipo
        })
        return res.json({saida: output});
    }

    static async deletar(req, res)
    {
        let {pk} = req.body;

        if(!pk || pk.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "Você deve fornecer um Id válido para deletar um serviço"})
        }

        let output = await ServicoModel.findByPk(pk);
        if(!output || output.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "Não foi possível encontrar um serviço com esse id"})
        }

        output.destroy();

        return res.status(204).json({msg: "Serviço deletado com sucesso!", obj: output});

    }

    static async pegarTodos(req, res)
    {
        let output = await ServicoModel.findAll();
        if(!output || output.length <= 0)
        {
            return res.status(400).json({erro: true, msg:"Não foi possível recuperar os registros dos Serviços"});
        }

        return res.status(200).json({
            saida: output
        })
    }

    static async editar(req, res)
    {
        let { pk, tipo } = req.body;

        let foundRow = await ServicoModel.findByPk(pk);

        if(!foundRow || foundRow.length <=0)
        {
            return res.status(400).json({erro: true, msg: "Não foi possível encontrar um serviço com esse id"})
        }

        foundRow['tipo'] = tipo;
        await foundRow.save();
        
        return res.status(200).json({saida: foundRow});
    }
}

module.exports = ServicoController;