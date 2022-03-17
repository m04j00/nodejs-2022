var Users = [{
        name: 'bts',
        age: 20
    },
    {
        name: 'girlsday',
        age: 22
    }
]
console.log('push() 호출 전 배열 요소의 수 : ', Users.length);

Users.push({
    name: 'tiara',
    age: 23
});
console.log('push() 호출 후 배열 요소의 수 : ', Users.length);
Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : ', Users.length);