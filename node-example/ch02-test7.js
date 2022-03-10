var os = require('os');
console.log('시스템의 hostname : ', os.hostname);
console.log('시스템의 메모리 : ', os.freemem(), ' / ', os.totalmem());
console.log('시스템의 cpu 정보');
console.log(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보 ');
console.log(os.networkInterfaces()); 