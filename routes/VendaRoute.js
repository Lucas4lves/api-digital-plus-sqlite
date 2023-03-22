const router = require("express").Router();
const controller = require("../controllers/VendaController");

router.post("/cadastrar", controller.cadastrar);
router.delete("/deletar", controller.deletar);
router.get("/todos", controller.pegarTodos);

module.exports = router;
