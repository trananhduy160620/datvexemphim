var express = require('express')
var router = express.Router()



router.get('/list-showtime-movie', function (req, res) {
    res.render('list-showtime-movie')
})


router.get('/add-showtime-movie', function (req, res) {
    res.render('add-showtime-movie')
})

module.exports = router