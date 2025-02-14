console.log(maxNum(500, 500));

function maxNum(n1, n2){
    if(n1 < n2){
        return n2;
    }else if(n1 > n2){
        return n1;
    }else{
        return 'Both integers are equal'
    }
}
