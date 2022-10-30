let colors = ['green', 'black', 'brown', 'blue', 'red']
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    if (index+1 == 1) {
        console.log(`my ${index+1}st choice is ${element}`)
    }else if(index+1 == 2){
        console.log(`my ${index+1}nd choice is ${element}`)
    }else if(index+1 == 3){
        console.log(`my ${index+1}rd choice is ${element}`)
    }else{
        console.log(`my ${index+1}th choice is ${element}`)
    }
}

