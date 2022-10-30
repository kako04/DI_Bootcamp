function isDivisible(divisor=23) {
    for (let index = 0; index < 501; index++) {
        if (index%divisor === 0) {
            console.log(index)
        }
        
    }
}
isDivisible()