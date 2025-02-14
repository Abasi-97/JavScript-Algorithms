//recursive range of numbers
function range(start,end){
    if(end < start){
        return [];
    }else{
        const number = range(start,end-1);
        number.push(end)
        return number;
    }
}
console.log(range(1,5))