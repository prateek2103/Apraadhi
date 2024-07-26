const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const poemRoutes = require("./routes/poemRoutes");
const shayariRoutes = require("./routes/shayariRoutes");
const storyRoutes = require("./routes/storyRoutes");
const PORT = 3000;
const db = require("./config/db");
const PoemModel = require("./models/PoemModel");
const StoryModel = require("./models/StoryModel");
const ShayariModel = require("./models/ShayariModel");

app.use(bodyParser.json());
app.use("/poems", poemRoutes);
app.use("/shayaris", shayariRoutes);
app.use("/stories", storyRoutes);

app.listen(PORT, () => {
  console.log(`server started at port: ${PORT}`);
});
