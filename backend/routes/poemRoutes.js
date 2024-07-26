const router = require("express").Router();
const poemController = require("../controllers/poemController");

// get all poems
router.get("/", poemController.getPoems);

// get poem by Id
router.get("/:id", poemController.getPoemById);

// add a new poem
router.post("/add", poemController.addPoem);

// delete a poem
router.get("/delete/:id", poemController.deletePoemById);

module.exports = router;
