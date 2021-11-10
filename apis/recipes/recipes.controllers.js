const mongoose = require("mongoose");
const morgan = require("mongoose-morgan");
const Cuisine = require("../../db/model/Cuisine");
const Recipes = require("../../db/model/Recipes");

exports.recipesListFetch = async (req, res, next) => {
  try {
    const recipes = await Recipes.find().populate();
    return res.json(recipes);
  } catch (error) {
    next(error);
  }
};
