//Libraries
var postgres = require('pg')
var sequelize = require('sequelize')
var express = require('express')
var app = express()

// Routers
var indexRoute = require('./routes/index.route')
var cinemaRoute = require('./routes/cinema.route')
var cinemaComplexRoute = require('./routes/cinema-complex.route')
var movieRoute = require('./routes/movie.route')
var showtimeMovieRoute = require('./routes/showtime-movie.route')
var doanhthuRoute = require('./routes/doanhthu.route')
app.use(express.static(__dirname + "/public" ));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs')

app.use(indexRoute)
app.use(cinemaRoute)
app.use(cinemaComplexRoute)
app.use(movieRoute)
app.use(showtimeMovieRoute)
app.use(doanhthuRoute)


app.use(function(req, res) {
    res.send('404 not found')
})


var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})