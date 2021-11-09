const mongoose = require("mongoose");

const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { Schema } = mongoose;

const CuisineSchema = Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
  },

  { timestamps: true }

  // Need to add relation for Dishes
);

// REVIEW: You have this plugin but you dont have a slug field in your model
CuisineSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Cuisine", CuisineSchema);
