const path = require('path');
const express = require('express');
const Rap = require('../controllers/menuRap');

const router = express.Router();

router.get('/rap', Rap.getRap);

module.exports = router;