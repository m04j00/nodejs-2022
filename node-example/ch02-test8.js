var path = require('path');
var directories = ["users", 'sunny', 'docs'];
var docsDirecotry = directories.join(path.sep);
console.log('문서 디렉토리 : ', docsDirecotry);

var curPath = path.join('/Users/sunny', 'notepad.exe');
console.log('파일 패스 : ', curPath);

var filename = "C:\\Users\\sunny\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('디렉토리 :  %s, 파일 네임 : %s, 확장자 : %s',dirname, basename, extname);