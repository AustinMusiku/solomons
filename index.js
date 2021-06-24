const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/routes');
let session = require('express-session');
let mySQLStore = require('express-mysql-session')(session);

// setup config
dotenv.config()

// setup express
let app = express();

// setup sessionstore
let options = {
    host: 'localhost',
    port: 3306,
    user: process.env.DATABASE_USER || 'root',
    password: process.env.PASSWORD || '70949901',
    database: process.env.NAME || 'solomons'
}
let sessionStore = new mySQLStore(options);

// MIDDLEWARE
app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(cors());
app.use(session({
    key: 'session',
    secret: 'secret',
    maxAge: 30*60*1000,
    store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
app.use('/', router);

// setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));


// server listen
let port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

