console.log(toUppCase('hi there lend me some peanuts'))
function toUppCase(str){
    let wordAr = []
    let newstr = str.split(' ');
    for(let i = 0; i < newstr.length; i++){
        let word = newstr[i];
        word = word.charAt(0).toUpperCase()+word.slice(1);
        wordAr.push(word);
    }
    return wordAr.join(' ');
}