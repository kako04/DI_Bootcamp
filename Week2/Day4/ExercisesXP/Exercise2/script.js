function calculateTip() {
    let bill = prompt("bill amount?");
    if (bill<50) {
        console.log(`pay ${bill*1.2}`);
    } else if (bill>50 && bill<200) {
        console.log(`pay ${bill*1.15}`);
    }else{
        console.log(`pay ${bill*1.1}`);
    }
}
calculateTip()