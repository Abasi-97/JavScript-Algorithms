console.log(countVowel('javascript'));

function countVowel(str){
    let count = 0;
    for(let x = 0; x < str.length; x++){
        if(isVowel(str[x])){
            count++;
        }
    }
    return count;
}

function isVowel(c){
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    return vowels.includes(c);
}