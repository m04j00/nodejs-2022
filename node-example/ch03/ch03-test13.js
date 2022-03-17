var Users = [{
        name: 'bts',
        age: 20
    },
    {
        name: 'girlsday',
        age: 22
    },
    {
        name: 'tiara',
        age: 23
    }
];

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : ', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후 ');
console.dir(Users);

Users.splice(1, 0, {
    name: 'afterschool',
    age: 24
});
console.log('splice()로 요소를 인덱스 1에 추가 후');
console.dir(Users);
Users.splice(2, 1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');
console.dir(Users);