const mongoose = require("mongoose");
const morgan = require("mongoose-morgan");
const Cuisine = require("../../db/model/Cuisine");
// REVIEW: Remove unused requires

exports.cuisineListFetch = async (req, res, next) => {
  try {
    const cuisines = await Cuisine.find();
    return res.json(cuisines);
  } catch (error) {
    next(error);
  }
};

exports.cuisineCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}}`;
    }

    const newCuisine = await Cuisine.create(req.body);

    return res.status(201).json(newCuisine);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
