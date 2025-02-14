/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i = 0; i<nums.length; i++){
        let square = nums[i]*nums[i];
        nums[i] = square;
    }
     return nums.sort((a,b)=>a-b);
 }