const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "160620",
    database: "DATVEXEMPHIM"
});
client.connect();
client.query('SELECT NOW()', function(err, res) {
    console.log(err, res)
    client.end();
});