var express = require('express')
var router = express.Router()

const showtimeController = require('../controllers/showtime.controller')

router.get('/list-showtime-movie', showtimeController.listShowTime)


router.get('/add-showtime-movie', showtimeController.displayShowtimeAddForm)
router.post('/add-showtime-movie', showtimeController.addShowtimeMovie)


router.get('/update-showtime-movie', showtimeController.displayOldShowtime)
router.post('/update-showtime-movie', showtimeController.updateShowtimeMovie)

router.get('/delete-showtime-movie', showtimeController.deleteShowtimeMovie)
module.exports = router