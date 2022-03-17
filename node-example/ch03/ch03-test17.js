function add(a, b, callback) {
    var result = a + b;
    callback(result);
    var count = 0;
    var history = function () {
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    }
    return history;
}
var hisotry = add(10, 10, function (result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과 : ', result);
});
console.log('결과값으로 받은 함수 실행 결과 : ', hisotry());
console.log('결과값으로 받은 함수 실행 결과 : ', hisotry());
console.log('결과값으로 받은 함수 실행 결과 : ', hisotry());