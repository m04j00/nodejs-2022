process.on('exit', function(){
    console.log('exit 이벤트 발생');
});

setTimeout(function(){
    console.log('5초 후 시스템 종료 시도');
    process.exit();
}, 5000);

console.log('5초 후 실행될 예정');
