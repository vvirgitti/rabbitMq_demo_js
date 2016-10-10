'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res){
    res.send('Hello World')
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log('App has started');
console.log('App running on: ' + port);

module.exports = app;
