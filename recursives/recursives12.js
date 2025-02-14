//number of digits
function digitCounter(num,counter=0){
    if(num === 0){
        return counter;
    }else{
        return digitCounter(Math.floor(num/10),counter+1);
    }
}
console.log(digitCounter(8882345))