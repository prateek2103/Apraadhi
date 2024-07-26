const router = require("express").Router();
const shayariController = require("../controllers/shayariController");
router.get("/", shayariController.getShayaris);

module.exports = router;
