var express = require('express')
var cinemaContrller = require('../controllers/cinema.controller')
var router = express.Router()



router.get(['/list-cinema'], cinemaContrller.listCinema)
router.get('/add-cinema', function (req, res) {
    res.render('add-cinema')
})
module.exports = router