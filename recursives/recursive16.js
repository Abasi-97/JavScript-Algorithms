//palindrome number
function palindromeChecker(num1){
    let storedNum = num1;
    let n = 0;
    while(num1>0){
        let remainder = num1%10
        n = n*10+remainder;
        num1 = Math.floor(num1/10)
    }
    return storedNum === n;
    
}
console.log(palindromeChecker(121))