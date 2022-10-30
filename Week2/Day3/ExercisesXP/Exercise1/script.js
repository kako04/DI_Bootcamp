const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1)
people.splice(2, 1, "jason")
people.splice(3,1,"kako")
console.log(people);
console.log(people.indexOf("Mary"));
let nwppl = people.slice(1,3)
let text = "foo"
console.log(text.indexOf())

// part II
people.forEach(element => {
    // console.log(element)
});
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    if (element == "jason") {
        console.log(element);
        break;
    }else{
        continue;
    }
}