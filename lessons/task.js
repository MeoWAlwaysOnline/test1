let gameName;
while (true) {
    gameName = prompt("Type name of game");
    if (gameName === null || gameName === " " || !isNaN(gameName)) {
        alert("try again")
    } else {
        break;
    }
}
let studioName;
while (true) {
    studioName = prompt("Type name of studio");
    if (studioName === null || studioName === " " || !isNaN(studioName)) {
        alert("try again")
    } else {
        break;
    }
}
let money;
while (true) {
    money = prompt("Type budget");
    if (money === null || money === " " || isNaN(money)) {
        alert("try again")
    } else {
        break;
    }
}
let gameTime;
while (true) {
    gameTime = prompt("Type how much time do you give us");
    if (gameTime === null || gameTime === " ") {
        alert("try again");
    } else {
        break;
    }
}

// step 3
let quality;
while (true) {
    quality = "standard";

    switch (quality) {
    case "standard":
    alert("Quality of game will be standard.");   
    break;

    case "deluxe":
    alert("Quality of game will be deluxe.");    
    break;

    default: false;
    break;
}
break;
}