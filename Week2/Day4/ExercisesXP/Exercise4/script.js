const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"]
let totalbill =0;
function myBill() {
    for (let fruit in shoppingList) {
        if (stock[shoppingList[fruit]]>0) {
            totalbill=prices[shoppingList[fruit]]+totalbill
            console.log(shoppingList[fruit],"stock amount was:",stock[shoppingList[fruit]]);
            stock[shoppingList[fruit]]-=1
            console.log(shoppingList[fruit],"stock amount is:",stock[shoppingList[fruit]]);
        }
    }
    console.log("totalbill",totalbill);
}
myBill()