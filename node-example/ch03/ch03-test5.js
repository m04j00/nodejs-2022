var Person = {};

Person.age = 20;
Person.name = 'bts';
Person.add = function(a, b){
    return a+b;
}

console.log('더하기 : ', Person.add(10, 10));