var express = require('express')
var router = express.Router()
var cinemComplexController = require('../controllers/cinema-complex.controller')



router.get('/list-cinema-complex', cinemComplexController.listCinemaComplex)
router.get('/add-cinema-complex', cinemComplexController.showCinemaComplexAddPage)
router.post('/add-cinema-complex', cinemComplexController.addCinemaComplex)

router.get('/update-cinema-complex', cinemComplexController.showOldCinemaComplex)
router.post('/update-cinema-complex', cinemComplexController.updateCinemaComplex)

router.get('/delete-cinema-complex', cinemComplexController.deleteCinemaComplex)
module.exports = router