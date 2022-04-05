var expressErrorHandler = require('express-error-handler');
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

app.use('/public', static(path.join(__dirname, 'public')));

var router = express.Router();
router.route('/process/users/:id').post(function (req, res, next) {
    console.log('/process/users/:id 처리함.');

    var paramId = req.params.id;
    console.log('/process/users와 토큰 %s를 이용해 처리함', paramId);
    var paramName = req.body.name || req.query.name;
    var paramPassword = req.body.password || req.query.password;
    res.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    });
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});
app.use('/', router);

app.all('*', function (req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

var errorHandler = expressErrorHandler({
    static:{
        '404' : './public/404.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 3000번 포트에서 시작됨');
});