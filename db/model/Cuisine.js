const mongoose = require("mongoose");

const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { Schema } = mongoose;

const CuisineSchema = Schema(
  {
    slug: String,
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    ricipes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Ricipes",
      },
   ],

  },


  { timestamps: true }

 

);

CuisineSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Cuisine", CuisineSchema);
