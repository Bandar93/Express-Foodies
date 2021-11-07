const express = require("express");
const router = express.Router();

const { signup } = require("./users.controllers");

router.post("/signup", signup);

module.exports = router;