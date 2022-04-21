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
app.use('/uploads', static(path.join(__dirname, 'uploads')));
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

router.route('/process/photo').post(upload.array('photo1', 1), function (req, res) {
    console.log('/process/photo 호출됨');
    try {
        var files = req.files;
        console.dir('#===== 업로드된 첫번째 파일 정보 =====#');
        console.dir(req.files[0]);
        console.dir('#=====#');

        var originalname = '',
            filename = '',
            mimetype = '',
            size = 0;

        if (Array.isArray(files)) {
            console.log('배열에 들어있는 파일 갯수 : ', files.length);
            for (let i of files) {
                originalname = i.originalname;
                filename = i.filename;
                mimetype = i.mimetype;
                size = i.size;
            }
        } else {
            console.log('파일 갯수 : 1');
            originalname = files[0].originalname;
            filename = files[0].name;
            mimetype = files[0].mimetype;
            size = files[0].szie;
        }
        console.log('현재 파일 정보 : ', originalname, ', ', filename, ', ', mimetype, ', ', size);
        res.writeHead('200', {
            'Content-Type': 'text/html;charset=utf8'
        });
        res.write('<h3>파일 업로드 성공</h3>');
        res.write('<hr/>')
        res.write('<p>원본 파일명 : ' + originalname + ' -> 저장 파일명 : ' + filename + '</p>');
        res.write('<p>MIME TYPE : ' + mimetype + '</p>');
        res.write('<p>파일 크기 : ' + size + '</p>');
        res.end();
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