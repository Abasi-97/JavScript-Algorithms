/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let pivot = -1;
    for(let i = 1; i<=n; i++){
        let leftSum = 0;
            rightSum = 0;
        for(let j = 1; j<=i; j++){
            leftSum = leftSum + j;
        }
        for(let k = n; k>=i; k--){
            rightSum = rightSum + k;
        }
        if(leftSum === rightSum){
            pivot = i;
        }
    } 
    return pivot; 
};