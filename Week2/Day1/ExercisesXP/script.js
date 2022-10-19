// exercise1
const fav_food = "nuggets"
const fav_meal = "dinner"
console.log(`i eat ${fav_food} at every ${fav_meal}.`)

// exercise2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLenght = myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`
console.log(`i watched ${myWatchedSeriesLenght} series: ${myWatchedSeriesSentence}`)
let myWatchedSeries2= myWatchedSeries.pop();
myWatchedSeries[2] = "friends";
myWatchedSeries[3] = 'brooklyn99';
myWatchedSeries[4] = 'office';
let myWatchedSeries3 = myWatchedSeries.splice(0, 0, "brooklyn99")

let myWatchedSeries4 = myWatchedSeries.splice(1, 1, )
console.log(myWatchedSeries[1][2])
console.log(myWatchedSeries)

//exercise3
const celsius = 27;
const fahrenheit = celsius/5*9+32
console.log(fahrenheit)

//exercise4
let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction:55
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual:23
console.log(3 + 4 + '5');
    // Prediction:75
    // Actual:75


//Exercise 5

typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:number
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:NaN
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:

"johnny" - 5
// Prediction:
// Actual:NaN

99 * "hello"
// Prediction:hello written 99 times
// Actual:NaN

1 != 1
// Prediction:true
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false


