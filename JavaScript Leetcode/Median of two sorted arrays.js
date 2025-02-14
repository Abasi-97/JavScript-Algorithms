/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = nums1.concat(nums2);
    newArr.sort((a,b)=>a-b);
    let middle = Math.floor((0+newArr.length-1)/2);
    if(newArr.length % 2 != 0){
        return newArr[middle];
    }else{
        return (newArr[middle]+newArr[middle+1])/2;
    }
};