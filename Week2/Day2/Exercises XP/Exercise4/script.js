const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if(users.length == 0){
    console.log("no one is online");
}else if(users.length == 1){
    console.log("<name_user> is online");
}else if(users.length == 2){
    console.log("<name_user1> and <name_user2> are online");
}else{
    console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`)
}