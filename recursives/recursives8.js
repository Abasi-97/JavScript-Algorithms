//recursive linear search
var arr = []
for(let i = 1; i <=100; i++){
    arr.push(i);
}
function linearSearch(arr,n,num){
    if(arr[n] === num){
        return `found ${num} at index ${n}`
    }else{
        return linearSearch(arr,n+1,num);
    }
}
console.log(linearSearch(arr,0,67))