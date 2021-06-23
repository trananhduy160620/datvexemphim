var express = require('express')
var router = express.Router()

const showtimeController = require('../controllers/showtime.controller')

router.get('/list-showtime-movie', showtimeController.listShowTime)


router.get('/add-showtime-movie', function (req, res) {
    res.render('add-showtime-movie')
})

module.exports = router