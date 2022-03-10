console.log('argv 속서으이 파라미터 수 : ' , process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index){
    console.log(index, ' : ', item);
});

if(process.argv.length > 2){
    console.log('세번째 파라미터의 값 : ', process.argv[2]);
}