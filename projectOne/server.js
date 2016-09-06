var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('',['']);
var body_parser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(body_parser.json());

app.listen(3000);
console.log('app is listening to port: 3000 ...');
