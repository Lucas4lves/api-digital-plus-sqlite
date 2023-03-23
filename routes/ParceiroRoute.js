const router = require("express").Router();
const controller = require("../controllers/ParceiroController");

router.get("/todos", controller.pegarTodos);
router.post("/cadastrar", controller.cadastrar);
router.delete("/deletar", controller.deletar);
router.put("/editar", controller.editar);

module.exports = router;