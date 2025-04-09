const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoute = require('./routes/home');
const downloadRoute = require('./routes/rt_download');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', downloadRoute);
app.use(homeRoute);

app.listen(process.env.APP_PORT || 3001, () => {
    console.log("Server is up and running.");
});





