let number = prompt("gimme number")
for (let smth in number) {
    if (number<10) {
        let number = prompt("gimme number")
    }else{
        console.log("thats what i thought");
    }
}