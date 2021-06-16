var express = require('express')
var router = express.Router()



router.get('/list-cinema-complex', function (req, res) {
  res.render('list-cinema-complex')
})
router.get('/add-cinema-complex', function (req, res) {
    res.render('add-cinema-complex')
})
module.exports = router