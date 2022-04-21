var express = require('express');
var expressErrorHandler = require('express-error-handler');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var multer = require('multer');
var fs = require('fs');
var cors = require('cors');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    secret: 'myKey',
    resave: true,
    saveUninitialized: true
}));

router.route('/process/login').post(function (req, res) {
    console.log('/process/login 호출됨');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if (req.session.user) {
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');
        res.redirect('/product.html');
    } else {
        req.session.user = {
            id: paramId,
            name: '소녀시대',
            autorized: true
        };
        res.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8'
        });
        res.write('<h1>로그인 성공</h1>');
        res.write('<div><p>Param id : ' + paramId + '</p></div>');
        res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
        res.write("<br><br><button><a href='/product.html'>상품 페이지로 이동하기</a></button>");
        res.write("<button><a href='/photomulti_link.html'>파일업로드로 이동하기</a></button>");

        res.end();
    }
});

router.route('/process/logout').get(function (req, res) {
    console.log('/process/logout 호출');
    if (req.session.user) {
        console.log('로그아웃합니다.');
        req.session.destroy(function (err) {
            if (err) {
                throw err;
            }
            console.log('세션 삭제하고 로그아웃됨');
            res.redirect('/login2.html');
        })
    } else {
        console.log('아직 로그인되어있지 않습니다.')
        res.redirect('/login2.html');
    }
})

router.route('/process/product').get(function (req, res) {
    console.log('/process/product 호출');
    if (req.session.user) {
        res.redirect('/product.html');
    } else {
        res.redirect('/login2.html');
    }
});
app.use('/', static(path.join(__dirname, 'uploads')));
app.use(cors());
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname);
        callback(null, basename + Date.now() + extension);
    }
});
var upload = multer({
    storage: storage,
    limits: {
        files: 12,
        fileSize: 1024 * 1024 * 1024
    }
});

router.route('/process/photo12').post(upload.array('photo12', 12), function (req, res) {
    console.log('/process/photo12 호출됨');
    try {
        var files = req.files;

        var originalname = '',
            filename = '',
            mimetype = '',
            size = 0;
        res.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8'
        });
        if (Array.isArray(files)) {
            console.log('배열에 들어있는 파일 갯수 : ', files.length);
            for (let i = 0; i < files.length; i++) {
                console.dir('#===== 업로드 된 ', (i + 1), '번째 파일 정보 =====#')
                originalname = files[i].originalname;
                filename = files[i].filename;
                mimetype = files[i].mimetype;
                size = files[i].size;
                console.log('현재 파일 정보 : ', originalname, ', ', filename, ', ', mimetype, ', ', size);

                res.write('<h3>이민지님 ' + (i + 1) + '번째 파일 업로드 성공</h3>');
                res.write('<hr/>')
                res.write('<p>원본 파일명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
                res.write('<p>MIME TYPE : ' + mimetype + '</p>');
                res.write('<p>파일 크기 : ' + size + '</p>');
                res.end();
            }
            res.write("<br><br><button><a href='/product.html'>상품 페이지로 이동하기</a></button>");

        }
    } catch (err) {
        console.dir(err);
    }
})
app.use('/', router);
var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(3000, function () {
    console.log('Express 서버가 3000번 포트에서 시작됨');
});