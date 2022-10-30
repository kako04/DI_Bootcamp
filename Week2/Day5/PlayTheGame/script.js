function playTheGame() {
  let text = "would you like to plaY?";
  if (confirm(text) == false) {
    alert("No problem, Goodbye");
  } else {
    let userNumber =Number(prompt("type number between 0 and 10"))
    if (userNumber <0 || userNumber>9) {
      alert("Sorry it's not a good number, Goodbye")
    }
    else if(userNumber >=0 && userNumber <= 9){
      let computerNumber =(Math.round(Math.random() * 10))
      console.log(computerNumber);
      compareNumbers(userNumber, computerNumber)
    }
    else{
      alert("Sorry Not a number, Goodbye")
    }
  }
}

function compareNumbers(userNumber,computerNumber){
  for (let index = 0; index < 3; index++) {
    if (userNumber === computerNumber) {
      alert("WINNER")
    } else if (userNumber > computerNumber){
      alert("Your number is bigger then the computer's, guess again")
      userNumber = Number(prompt("guess again"))
    } else if (computerNumber > userNumber){
      alert("Your number is smaller then the computer's, guess again")
      userNumber = Number(prompt("guess again"))
    } 
  }
}
