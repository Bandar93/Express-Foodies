const mongoose = require("mongoose");

const mongooseSlugPlugin = require("mongoose-slug-plugin");

const { Schema } = mongoose;

const RicipesSchema = Schema(
  {
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
   }
    
  },


 
);

RicipesSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Ricipes", RicipesSchema);
