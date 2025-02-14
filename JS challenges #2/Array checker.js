console.log(isArray([1,2,3,4]));
console.log(isArray(122));
function isArray(ar){
    if(Array.isArray(ar)){
        return 'this is an array'
    }else{
        return 'this is not an array'
    }
}
