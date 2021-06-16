var express = require('express')
var router = express.Router()



router.get('/list-movie', function (req, res) {
  res.render('list-movie')
})


router.get('/add-movie', function (req, res) {
    res.render('add-movie')
})

module.exports = router