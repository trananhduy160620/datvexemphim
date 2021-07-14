const path = require("path");
const express = require("express");
const Rap = require("../controllers/rap");

const router = express.Router();

router.get("/cum-rap", Rap.getRap);
router.get("/cum-rap/:idCumRap", Rap.getListRap);

module.exports = router;
