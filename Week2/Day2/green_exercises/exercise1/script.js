let user_age = prompt("how old are you?");
if (user_age < 18){
    alert("Sorry, you are too young to drive this car. Powering off")
}else if(user_age == 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}else{
    alert("Powering On. Enjoy the ride!")
}