const express = require("express");
const upload = require("../../middleware/multer");
const { recipesListFetch, recipesCreate } = require("./recipes.controllers");
const router = express.Router();

router.get("/recipes", recipesListFetch);




module.exports = router;


