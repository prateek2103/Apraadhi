const router = require("express").Router();
const storyController = require("../controllers/storyController");
router.get("/", storyController.getStories);

module.exports = router;
