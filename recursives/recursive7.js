//linear search using recursion
const arr = [1,2,3,4,5,6];
function linearSearch(arr,num){
    if(arr[0] === num){
        return arr[0];
    }else{
        return linearSearch(arr.slice(1,arr.length-1),num);
    }
}
console.log(linearSearch(arr,3));