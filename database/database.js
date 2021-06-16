const {Pool, Client} = require('pg')


var connectionString = "postgressql://postgres:160620@localhost:5432/DATVEXEMPHIM"

const client = new Client({
    connectionString: connectionString
})
client.connect()

// client.query('Select * from "Phim"', function(err, res) {
//     console.log(err, res)
//     client.end()
// })
module.exports = client
