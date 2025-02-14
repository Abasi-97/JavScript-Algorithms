let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

colorNth(color);

function colorNth(color){
    let prefix = ["th","st","nd","rd"]
    for(let x = 0; x < color.length; x++){
        if(color.indexOf(color[x]) == color.indexOf(color[0])){
            console.log(`${color.indexOf(color[x])+1}${prefix[1]} is ${color[x]}`);
        }
        else if(color.indexOf(color[x]) == color.indexOf(color[1])){
            console.log(`${color.indexOf(color[x])+1}${prefix[2]} is ${color[x]}`)
            
        }
        else if(color.indexOf(color[x]) == color.indexOf(color[2])){
            console.log(`${color.indexOf(color[x])+1}${prefix[3]} is ${color[x]}`)
            
        }
        else{
            console.log(`${color.indexOf(color[x])+1}${prefix[0]} is ${color[x]}`)
        }

    }
}