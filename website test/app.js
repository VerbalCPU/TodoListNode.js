const express = require('express');
const session = require('express-session');
const firstController = require('./controllers/first_controller');
const app = express();

app.set("view engine", "ejs");

app.use(express.static('./public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


firstController(app);

app.listen(3000);
