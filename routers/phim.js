const path = require('path');
const express = require('express');
const phim = require('../controllers/phim');

const router = express.Router();

router.get('/phimdangchieu', phim.getPhimDangChieu);
router.get('/chi-tiet-phim', phim.getChiTietPhim)

module.exports = router;