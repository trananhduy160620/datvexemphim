const path = require('path');
const express = require('express');
const phim = require('../controllers/phim');

const router = express.Router();

router.get('/phimdangchieu', phim.getPhimDangChieu);
router.get('/chi-tiet-phim/:idPhim', phim.getDetailMovie);
router.get('/getDatVe', phim.getDatVe);

module.exports = router;