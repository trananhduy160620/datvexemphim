const path = require('path');
const express = require('express');
const lichSu = require('../controllers/lichSuDatVe');

const router = express.Router();

router.get('/lichsudatve', lichSu.getLichSuDatVe);

module.exports = router;