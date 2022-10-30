function hotelCost() {
    while (isNaN(Number(hotelCost))) {
        hotelCost= prompt("how many nights?")
        console.log(`$${hotelCost*140}`);
    }
    
}
hotelCost()
