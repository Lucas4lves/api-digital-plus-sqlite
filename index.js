require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./db/index");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Methods", '*');
    app.use(cors());
    next();
})

const connect = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync()
        console.log("Conectado, otário"); 
    }catch(err){
        console.log(err);
    }
}

connect();

const ServicoRoute = require("./routes/ServicoRoute");
const AdminRoute = require("./routes/AdminRoute");
const VendaRoute = require("./routes/VendaRoute");
const ParceiroRoute = require("./routes/ParceiroRoute");

app.use("/servico", ServicoRoute);
app.use("/admin", AdminRoute);
app.use("/vendas", VendaRoute);
app.use("/parceiros", ParceiroRoute);

app.listen(process.env.PORT || 3232, ()=>{
    console.log(`App rodando na porta ${process.env.PORT}`);
});


