//recursive say-hi
function numberOfHi(n){
    if(n === 1){
        console.log('hello')
    }else{
        console.log('hi');
        numberOfHi(n-1);
    }
}
numberOfHi(5);