const path = require('path');
const express = require('express');
const datve = require('../controllers/datVe');

const router = express.Router();

router.get('/datve', datve.getDatVe);
router.post('/datve', datve.postDatVe);

module.exports = router;