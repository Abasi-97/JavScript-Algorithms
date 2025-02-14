//mergesort
function merge(leftA, rightA){
    console.log(`left array: ${leftA}, right array: ${rightA}`);
    var results= [], leftIndex = 0,
    rightIndex= 0;
    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if(leftA[leftIndex] <rightA[rightIndex]){
        results.push(leftA[leftIndex]);
        leftIndex++;
        } else {
            results.push(rightA[rightIndex]);
            rightIndex++;
        }
    }
    var leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex);
        // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}
function mergeSort(array) {
    if(array.length<2){
        return array; // Base case: array is now sorted since it's just 1 element
    }
    var midpoint = Math.floor((array.length)/2),
        leftArray = array.slice(0,midpoint),
        rightArray = array.slice(midpoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
   
console.log(mergeSort([6,5,4,3,2,1]));

