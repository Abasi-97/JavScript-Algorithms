//recursive sum
function recursiveSum(num){
    if(num === 0){
        return 0;
    }else{
        return num%10 + recursiveSum(Math.floor(num/10));
    }

}
console.log(recursiveSum(123))