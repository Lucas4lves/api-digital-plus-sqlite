const sequelize = require("../db");

class FiltroController {
    static async montarDashboard(req, res)
    {
        const { dia, mes, ano } = req.body;

        console.log("--------------------------------------");
        console.log(dia);
        console.log(mes);
        console.log(ano);
        console.log("--------------------------------------");
        const lucroMes = await sequelize.query(`SELECT sum(lucro) AS 'lucromes' FROM vendas
        WHERE mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const lucroDia = await sequelize.query(`SELECT sum(lucro) AS 'lucrodia' FROM vendas
        WHERE dia_criacao = '${dia}' AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const vendasAbertasMes = await sequelize.query(`SELECT count(*) AS 'vendas_abertas' from vendas WHERE status_pedido = 'pendente'
        AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        const vendasEncerradasMes = await sequelize.query(`SELECT count(*) AS 'vendas_encerradas_mes' from vendas WHERE status_pedido = 'ok'
        AND mes_criacao = '${mes}' AND ano_criacao = '${ano}'`);

        if(!lucroMes[0])
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível recuperar os dados do dashboard"
            })
        }

        if(!vendasAbertasMes[0])
        {
            return res.status(400).json({
                erro: true,
                msg: "Não foi possível recuperar os dados do dashboard"
            })
        }

        const {lucro_dia} = lucroDia;

        let result = {
            lucro_dia : lucroDia[0],
            lucro_mes: lucroMes[0],
            vendas_abertas: vendasAbertasMes[0],
            vendas_encerradas_mes: vendasEncerradasMes[0]
        }

        console.log(result['lucro_dia'][0]['lucrodia']);

        return res.status(200).json({
                lucro_dia : result['lucro_dia'][0]['lucrodia'],
                lucro_mes: result['lucro_mes'][0]['lucromes'],
                vendas_abertas: result['vendas_abertas'][0]['vendas_abertas'],
                vendas_encerradas_mes: result['vendas_encerradas_mes'][0]['vendas_encerradas_mes']
            } 
        )
    }
}

module.exports = FiltroController;