/* setup nodejs server*/
var express = require('express');
var app = express();//basic express server - node js application
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.locals.d3data = require('./miserables.json');//can use anywhere in proj
app.use(express.static(__dirname));
app.use(bodyParser.json());//read data inside request



app.listen();

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});