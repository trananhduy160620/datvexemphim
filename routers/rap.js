const path = require('path');
const express = require('express');
const Rap = require('../controllers/rap');

const router = express.Router();

router.get('/rap', Rap.getRap);

module.exports = router;