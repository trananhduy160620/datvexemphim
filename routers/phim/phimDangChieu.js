const path = require('path');
const express = require('express');
const phim = require('../../controllers/phim/phimDangChieu');

const router = express.Router();

router.get('/phimdangchieu', phim.getPhimDangChieu);

module.exports = router;