//recursive binary search
const arr = [1,2,3,4,5,6,7];
function recursiveSearch(arr,low,high,value){
    let middle = Math.floor((low+high)/2);
    if(low>high){
        return `${value} not found`
    }else if(arr[middle] === value){
        return `found ${value} at index ${middle}`;
    }else if(arr[middle]<value){
        return recursiveSearch(arr,middle+1,high,value);
    }else if(arr[middle]>value){
        return recursiveSearch(arr,low,middle-1,value);
    }
    
}
console.log(recursiveSearch(arr,0,arr.length-1,5));