const router = require("express").Router();
const controller = require("../controllers/AdminController");

router.post("/login", controller.login);

module.exports = router;
