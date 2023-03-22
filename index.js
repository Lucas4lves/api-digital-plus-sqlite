require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./db/index");


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin: *");
    res.header("Access-Control-Allow-Headers: *");
    app.use(cors());
    next();
})

const connect = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Conectado, otário"); 
    }catch(err){
        console.log(err);
    }
}

connect();

const ServicoRoute = require("./routes/ServicoRoute");
const AdminRoute = require("./routes/AdminRoute");

app.use("/servico", ServicoRoute);
app.use("/admin", AdminRoute);


app.listen(process.env.PORT || 3232, ()=>{
    console.log(`App rodando na porta ${process.env.PORT}`);
});


