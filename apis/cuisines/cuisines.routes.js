const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");
const { jwtStrategy } = require("../../middleware/passport");
const {
  cuisineListFetch,
  cuisineCreate,
  recipesCreate,
  fetchCuisine,
} = require("./cuisines.controllers");
const router = express.Router();

router.get("/cuisines/:cuisineId", fetchCuisine);

router.get("/cuisines", cuisineListFetch);

router.post(
  "/cuisines",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  cuisineCreate
);

router.post(
  "/cuisines/:cuisineId/recipes",
  upload.single("image"),
  recipesCreate
);

module.exports = router;
