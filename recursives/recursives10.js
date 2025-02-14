//find maximum number in an array
const arr = [1,3,5,55,[44,23,700,[600,2,1],0,400],1000,60000,[10000000,300,[12,2]]];
function maxNum(arr,index,max){
    if(index > arr.length-1){
        return max;
    }
    if(Array.isArray(arr[index])){
        arr[index] = maxNum(arr[index],0,0);
    }
    if(arr[index]>max){
        max = arr[index];
    }
    return maxNum(arr,index+1,max);
}
console.log(maxNum(arr,0,0));