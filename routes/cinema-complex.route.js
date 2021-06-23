var express = require('express')
var router = express.Router()
var cinemComplexController = require('../controllers/cinema-complex.contrller')



router.get('/list-cinema-complex', cinemComplexController.listCinemaComplex)
router.get('/add-cinema-complex', function (req, res) {
    res.render('add-cinema-complex')
})
module.exports = router