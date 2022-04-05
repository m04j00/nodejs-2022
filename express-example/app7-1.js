var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// app.use('/', static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.redirect('./login.html');
});

http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 3000번 포트에서 시작됨');
});