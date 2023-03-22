const AdminModel = require("../models/Admin");

class AdminController
{
    static async login(req, res)
    {
        let { email, senha } = req.body;

        if(!email || email.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo de e-mail deve ser preenchido"});
        }

        if(!senha || senha.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "O campo de senha deve ser preenchido"});
        }

        let foundAdmin = await AdminModel.findOne({
            where: {
                email : email
            }
        });
        
        if(!foundAdmin || foundAdmin.length <= 0)
        {
            return res.status(400).json({erro: true, msg: "Um administrador com esse e-mail não existe no sistema"});
        }

        if(foundAdmin.senha == senha)
        {
            return res.status(200).json({saida: "Usuário logado com sucesso!"});
        }

    }
}

module.exports = AdminController;