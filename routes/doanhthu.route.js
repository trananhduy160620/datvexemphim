var express = require('express')
var doanthuController = require('../controllers/doanhthu.controller')
var router = express.Router()
var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


router.get('/doanh-thu-theo-cum-rap', doanthuController.showFormDoanhThuTheoCumRap)
router.post('/doanh-thu-theo-cum-rap', doanthuController.thongkeDoanhThuTheoCumRap)


router.get('/doanh-thu-theo-phim', doanthuController.showFormDoanhThuTheoPhim)
router.post('/doanh-thu-theo-phim', doanthuController.thongkeDoanhThuTheoPhim)
module.exports = router