//check if string is palindrome
function palindromeChecker(str,newStr='',index=str.length-1){
    if(index < 0){
        if(newStr === str){
            return `is a palindrome ${newStr}`
        }else{
            return `is not a palindrome ${newStr}`
        }
    }
    return palindromeChecker(str,newStr+str[index],index-1);
}
console.log(palindromeChecker('pip'));