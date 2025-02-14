console.log(signCheck(8));

function signCheck(num){
    if(num < 0){
        return 'the sign is -'
    }
    if(num > 0){
        return 'the sign is +'
    }else{
        return 'zero'
    }
}
