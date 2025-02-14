function rangeOfNumbers(start,end){
    if(end < start){
        return [];
    }else{
        const numbers = rangeOfNumbers(start, end - 1);
        
        numbers.push(end)
        console.log(numbers)
        return numbers;
    }

}

console.log(rangeOfNumbers(1,5));
