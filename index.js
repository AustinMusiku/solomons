const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/routes');

// setup config
dotenv.config()

// setup express
let app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(cors());
app.use('/', router);

// setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));


// server listen
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})

