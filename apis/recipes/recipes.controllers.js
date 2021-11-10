const mongoose = require("mongoose");
const morgan = require("mongoose-morgan");
const Cuisine = require("../../db/model/Cuisine");
const Recipes = require("../../db/model/Ricipes");

exports.recipesListFetch = async (req, res, next) => {
  try {
    const recipess = await Recipes.find().populate(cuisine);
    return res.json(recipess);
  } catch (error) {
    next(error);
  }
};

