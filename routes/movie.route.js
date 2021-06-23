var express = require('express')
var phimController = require('../controllers/movie.controller')
var router = express.Router()



router.get('/list-movie', phimController.listMovie)


router.get('/add-movie', function (req, res) {
    res.render('add-movie')
})

module.exports = router