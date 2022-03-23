var url = require('url');
var curURL = url.parse('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=popcorn&oquery=popcon&tqi=hB654lprvhGssTciZTsssssstHK-238038');
var curStr = url.format(curURL);
console.log('주소 문자열 : ', curStr);
console.dir(curURL);

var queryString = require('querystring');
var param = queryString.parse(curURL.query);
console.log('원본 요청 파라미터 : ', queryString.stringify(param));