function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.do_game = function (game) {
    console.log(game, '게임을 하고 있습니다.');
};
Person.prototype.go = function (place) {
    console.log(place + '에 가고 있습니다.')
}
Person.prototype.transport = function (transportation) {
    console.log(transportation + '를 타고 있습니다.')
}
var person1 = new Person('3112이민지', 17);
var person2 = new Person('이주헌', 29);
var person3 = new Person('이민혁', 30);

console.log(person1.name, '객체의 do_game(\'배그\') 호출');
person1.do_game('배그');
console.log(person2.name, '객체의 go(\'집\') 호출');
person2.go('집');
console.log(person3.name, '객체의 transport(\'비행기\') 호출');
person3.transport('비행기');