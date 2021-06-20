const path = require('path');
const express = require('express');
const datve = require('../controllers/datVe');

const router = express.Router();

router.get('/datve', datve.getDatVe);

module.exports = router;