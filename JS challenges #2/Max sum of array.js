//find the max sum of the array

function maxArrSum(arr){
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++){
            sum = sum + arr[j];
        }
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
}
console.log(maxArrSum([5,4,-1,7,8]));
