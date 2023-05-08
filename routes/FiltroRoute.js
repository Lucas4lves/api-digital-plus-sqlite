const router = require("express").Router();
const controller = require("../controllers/FiltrosController");


router.post("/dashboard", controller.montarDashboard);


module.exports = router;