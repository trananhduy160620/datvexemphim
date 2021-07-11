var express = require('express')
var movieController = require('../controllers/movie.controller')
var router = express.Router()
const multer = require('multer');
const { diskStorage } = require('multer');


router.get('/list-movie', movieController.listMovie)

var storage = diskStorage({
    destination: function(req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })
router.get('/add-movie', movieController.showFormAddMovie)
router.post('/add-movie', upload.single('poster'),movieController.addMovie)
router.get('/update-movie', movieController.showOldMovie)
router.post('/update-movie', movieController.updateMovie)
router.get('/delete-movie', movieController.deleteMovie)

module.exports = router