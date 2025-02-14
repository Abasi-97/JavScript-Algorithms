const number = [1,2,3,4,5];
function reverseArrayOfNumbers(arr){
    let middle = Math.floor(number.length/2);
    for(let x = 0; x < middle; x++){
        let temp = arr[x];
        arr[x] = arr[(arr.length-1)-x];
        arr[(arr.length-1)-x] = temp;
    }
    return arr;
}
console.log(reverseArrayOfNumbers(number));