var util = require('util');
var EventEmitter = require('events').EventEmitter;
var Calc = function () {
    this.on('start', function () {
        console.log('Calc에 start event 전달됨');
    });
    this.on('subtitle', function (title) {
        console.log('계산기 이벤트 발생함 :', title);
    });
    this.on('cal', function (a, b) {
        console.log('계산기 이벤트 발생 :', a, b);
    });
};
util.inherits(Calc, EventEmitter);

Calc.prototype.add = (a, b) => {
    return a + b;
}
Calc.prototype.substract = (a, b) => {
    return a - b;
}
Calc.prototype.multiply = (a, b) => {
    return a * b;
}
Calc.prototype.divide = (a, b) => {
    return a / b;
}
module.exports = Calc;
module.exports.title = 'calculator';