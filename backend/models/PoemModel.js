const mongoose = require("mongoose");
const PoemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  tags: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Poem", PoemSchema);
