const mongoose = require("mongoose");

const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { Schema } = mongoose;

const RecipesSchema = Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },

  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuisine",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

RecipesSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Recipes", RecipesSchema);
