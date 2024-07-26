const mongoose = require("mongoose");
const ShayariSchema = mongoose.Schema({
  description: {
    type: String,
    required: false,
  },
  tags: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Shayari", ShayariSchema);
