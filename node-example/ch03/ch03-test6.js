var Person = {};

Person.age = 20;
Person.name = 'bts';

var oper = function(a, b){
    return a+b;
}
Person.add = oper;

console.log('더하기 : ', Person.add(10, 10));