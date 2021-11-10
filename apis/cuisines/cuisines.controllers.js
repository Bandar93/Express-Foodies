const mongoose = require("mongoose");
const morgan = require("mongoose-morgan");
const Cuisine = require("../../db/model/Cuisine");
const Recipes = require("../../db/model/Ricipes")


exports.fetchCuisine = async (req, res, next) => {
  const {cuisineId} = req.params;
  try {
    const cuisine = await Cuisine.findById(cuisineId).populate();
    return res.json(cuisine)
  } catch (error) {
    next(error);
  }
};


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
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }

    console.log(req.body)

    const newCuisine = await Cuisine.create(req.body);

    return res.status(201).json(newCuisine);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

};

exports.recipesCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    const {cuisineId} = req.params;
    console.log(cuisineId)
    req.body.cuisine = cuisineId

    const newrecipes = await Recipes.create(req.body);
    await Cuisine.findByIdAndUpdate({_id:req.body.cuisine} , {$push: {ricipes: newrecipes._id}})

    return res.status(201).json(newrecipes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
    
    
  }
};
