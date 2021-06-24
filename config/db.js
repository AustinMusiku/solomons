let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.PASSWORD || '70949901',
    database: process.env.NAME || 'solomons'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('connection successful!');
})

module.exports = connection;