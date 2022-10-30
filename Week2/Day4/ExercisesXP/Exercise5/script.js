function changeEnough(itemPrice, amountOfChange){
    let sumof = amountOfChange;
    let total = 0;
    for (let i in sumof) {
        total+=sumof[i]
    }
    if (itemPrice<=total) {
        console.log("can afford");
    }else{
        console.log("cant afford");
    }
}
changeEnough(0.25, [0.25, 0.20, 0.5, 0])