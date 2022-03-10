var Users = [{
        name: 'bts',
        age: 20
    },
    {
        name: 'girlsDay',
        age: 22
    },
    {
        name: 'tiara',
        age: 23
    }
];
console.log('배열 요소의 수 : ', Users.length);
for (let i of Users) {
    console.log('배열 요소 #', i, ' : ', i.name);
}

console.log('forEach 구문 사용');
Users.forEach((item, index) => {
    console.log('배열 요소 #', index, ' : ', item.name);
})