function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function (speed) {
    console.log(speed, 'km 속도로 걸어갑니다.');
};

var person1 = new Person('소녀시대', 20);
var person2 = new Person('girl\'sDay', 22);

console.log(person1.name, '객체의 walk(10) 호출');
person1.walk(10);