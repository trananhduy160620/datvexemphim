const path = require("path");
const express = require("express");
const home = require("../controllers/Home");

const router = express.Router();

router.get("/", home.getHomePage);

router.get("/register", home.getRegister);
router.post("/register", home.postRegister);
router.get("/send", home.verifyUser);
router.get("/login", home.getLogin);
router.post("/login", home.postLogin);
router.get("/logout", home.logout);
router.get("/forget-password", home.getForgetPassword);
router.post("/forget-password", home.postForgetPassword);
router.get("/change-password", home.getChangePassword);
router.post("/change-password", home.postChangePassword);


module.exports = router;
