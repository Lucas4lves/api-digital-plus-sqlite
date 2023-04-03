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


const deIso = (data) => {
    let locale = new Date(data)
                    .toLocaleDateString();
    let [dia, mes, ano] = locale.split("/");

    return `${dia}/${mes}/${ano}`

}

module.exports = {
    formatarData, pegarVariaveisDeData, calcularLucro, deIso
}