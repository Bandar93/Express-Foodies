const express = require("express");
const upload = require("../../middleware/multer");
const { cuisineListFetch, cuisineCreate } = require("./cuisines.controllers");
const router = express.Router();

router.get("/cuisines", cuisineListFetch);

router.post("/cuisines", upload.single("image"), cuisineCreate);

module.exports = router;
