const path = require("path");
const express = require("express");
const Home = require("../controllers/Home");

const router = express.Router();

router.get("/", Home.getHomePage);
router.get('/redex',function(req,res){
    res.redirect('.');
});
router.get("/register", Home.getRegister);

module.exports = router;
