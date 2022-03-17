var Users = [{
        name: 'bts',
        age: 20
    },
    {
        name: 'girlsday',
        age: 22
    }
];

console.log('unshift() 호출 전 배열 요소의 수 : ', Users.length);

Users.unshift({
    name: 'tiara',
    age: 23
});

console.log('unshift() 호출 후 배열 요소의 수 : ', Users.length);

console.dir(Users);
Users.shift();

console.log('shift() 호출 후 배열 요소의 수 : ', Users.length);
console.dir(Users);