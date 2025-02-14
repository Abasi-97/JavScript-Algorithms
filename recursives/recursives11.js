//greatest common divisor
function gcd(a,b){
    if(b == 0){
        return a;
    }else{
        return gcd(b, a%b);
    }
}
console.log(gcd(4,12));