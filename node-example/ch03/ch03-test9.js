var Users = [
    {
        name: 'bts',
        age: 20
    },
    {
        name: 'girlsDay',
        age: 22
    }
];

var add = (a, b) => {
    return a + b;
};

Users.push(add);

console.log('배열 요소의 수 : ', Users.length);
console.log('세번째 요소로 추가된 함수 실행 : ', Users[2](10, 10));
console.log(Users[1], Users[2], Users[3]);
console.log(Users[0], Users[1], Users[2]);