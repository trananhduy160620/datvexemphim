var express = require('express')
var router = express.Router()



router.get(['/list-cinema'], function (req, res) {
  res.render('list-cinema')
})
router.get('/add-cinema', function (req, res) {
    res.render('add-cinema')
})
module.exports = router