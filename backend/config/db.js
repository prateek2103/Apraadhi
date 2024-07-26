const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "apraadhi",
  })
  .then(() => {
    console.log("connected to database");
  });

module.exports = mongoose;
