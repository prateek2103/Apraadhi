const PoemModel = require("../models/PoemModel");
require("dotenv").config();

const PAGE_SIZE = process.env.PAGE_SIZE;

// get all poems
exports.getPoems = (req, res, next) => {
  const { page } = req.query;
  PoemModel.find()
    .skip(page - 1)
    .limit(PAGE_SIZE)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).send("No poems found");
    });
};

// get a poem by id
exports.getPoemById = (req, res, next) => {
  const poemId = req.params.id;
  PoemModel.findById(poemId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).send(`No poem found by id: ${poemId}`);
    });
};

// add a new poem
exports.addPoem = (req, res, next) => {
  const { title, url, tags } = req.body;

  const newPoem = new PoemModel({
    title: title,
    url: url,
    tags: tags,
  });

  newPoem
    .save()
    .then((result) => {
      res.status(201).send("new poem added successfully");
    })
    .catch((err) => {
      //same title encountered
      if (err.code === 11000) {
        return res.status(403).send(`poem with that title already exists`);
      }

      res.status(500).send(`error saving poem please try again later`);
    });
};

// delete a poem by id
exports.deletePoemById = (req, res, next) => {
  const poemId = req.params.id;
  PoemModel.findByIdAndDelete(poemId)
    .then((result) => {
      res.send("poem deleted successfully");
    })
    .catch((err) => {
      res.status(404).send(`No poem found by id: ${poemId}`);
    });
};
