let mysql = require('mysql');

exports.connection = mysql.createConnection({
    host: 'localhost',
    user: 'austinmu_AustinMusiku',
    password: `${process.env.DATABASE_PASSWORD}`,
    database: 'austinmu_Solomons_honey'
});
