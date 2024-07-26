const mongoose = require("mongoose");
const StorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Story", StorySchema);
