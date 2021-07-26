const path = require('path');
const express = require('express');
const phim = require('../controllers/phim');

const router = express.Router();

router.get('/phimdangchieu', phim.getPhimDangChieu);
router.get('/chi-tiet-phim', phim.getChiTietPhim)
router.get('/chi-tiet-phim/:idPhim', phim.getDetailMovie);

module.exports = router;