var expressErrorHandler = require('express-error-handler');
var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var cookieParser = require('cookie-parser');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());

router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setuserCookie 호출됨');
    res.cookie('user',{
        id:'mike',
        name:'소녀 시대',
        authorized:true
    });
    res.redirect('/process/showCookie');
});
router.route('/process/showCookie').get(function(req,res){
    console.log('/process/showCookie 호출됨');
    res.send(req.cookies);
});

app.use('/', router);

// 404 처리
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