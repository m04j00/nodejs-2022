var fs = require('fs');
fs.open('./output.txt', 'w', (err, fd) => {
    if (err) throw err;
    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer) {
        if (err) return err;
        console.log(err, written, buffer);
        fs.close(fd, () => {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});