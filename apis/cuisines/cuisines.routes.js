const express = require("express");
const upload = require("../../middleware/multer");
const { cuisineListFetch, cuisineCreate } = require("./cuisines.controllers");
const router = express.Router();

// REVIEW: Move the `/cuisines` to app.js
router.get("/cuisines", cuisineListFetch);

router.post("/cuisines", upload.single("image"), cuisineCreate);

module.exports = router;
