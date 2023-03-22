const router = require("express").Router();
const controller = require("../controllers/VendaController");

router.post("/cadastrar", controller.cadastrar);
router.delete("/deletar", controller.deletar);

module.exports = router;
