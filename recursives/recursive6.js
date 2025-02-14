//recursive bubblesort
//solved on my own
const arr = [23,1000,1,-1,8,3];
let index = 0;
function bubbleSort(arr){
    if(index > arr.length-1){
        if(isNotsorted(arr)){
            index = 0;
            bubbleSort(arr);
        }else{
            return arr;
        }
    }
    if(arr[index]>arr[index+1]){
        let temp = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = temp;
        
    }
    index++;
    return bubbleSort(arr);
}
function isNotsorted(arr){
    const results = [];
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            results.push(false);
        }else{
            results.push(true);
        }
    }
    return results.includes(false);
}
bubbleSort(arr)
console.log(arr)