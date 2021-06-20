const path = require("path");
const express = require("express");
const Home = require("../controllers/Home");

const router = express.Router();

router.get("/", Home.getHomePage);
router.get("/register", Home.getRegister);

module.exports = router;
