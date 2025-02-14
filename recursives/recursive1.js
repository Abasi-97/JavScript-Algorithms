//Calculate n raised to power m - the value of n to the m power
function powerValue(n,m){
    if(m==1){
        return n;
    }else{
        return n*powerValue(n,m-1);
    }

}
console.log(powerValue(2,3))