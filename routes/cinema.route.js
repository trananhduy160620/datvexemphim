var express = require('express')
var cinemaController = require('../controllers/cinema.controller')
var router = express.Router()
var bodyParser = require('body-parser')
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


router.get(['/list-cinema'], cinemaController.listCinema)
router.get('/add-cinema', cinemaController.showCinemaPage)
router.post('/add-cinema', cinemaController.addCinema)
module.exports = router