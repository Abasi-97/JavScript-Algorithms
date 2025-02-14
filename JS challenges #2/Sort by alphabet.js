let str = 'javascript';
console.log(toAlphabet(str));

function toAlphabet(str){
    return str.split('').sort().join('');
}