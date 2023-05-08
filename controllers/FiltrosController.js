const sequelize = require("../db");

class FiltroController {
    static async montarDashboard(req, res)
    {
        const { dia, mes, ano } = req.body;

        const lucroMes = await sequelize.query(`SELECT sum(lucro) AS 'lucro_total_mes' FROM vendas
        WHERE mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const lucroDia = await sequelize.query(`SELECT sum(lucro) AS 'lucro_total_dia' FROM vendas
        WHERE dia_criacao = '${dia}' AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const vendasAbertasMes = await sequelize.query(`SELECT count(*) AS 'vendas_abertas' from vendas WHERE status_pedido = 'pendente'
        AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const vendasEncerradasMes = await sequelize.query(`SELECT count(*) AS 'vendas_abertas' from vendas WHERE status_pedido = 'ok'
        AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        if(!lucroMes)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível recuperar os dados do dashboard"
            })
        }

        if(!vendasAbertasMes)
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível recuperar os dados do dashboard"
            })
        }

        return res.status(200).json({
            resultado: {
                lucro_dia : lucroDia[0],
                lucro_mes: lucroMes[0],
                vendas_abertas: vendasAbertasMes[0],
                vendas_encerradas_mes: vendasEncerradasMes[0]
            } 
                
            
        })
    }
}

module.exports = FiltroController;