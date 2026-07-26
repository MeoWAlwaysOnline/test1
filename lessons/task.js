// First etap
let features = ["Multiplayer", "Story Mode", "Co-op", "Open World"];
let prices = [3000, 3500, 1200, 4000];
let glitches = [3, 43, 19, 9];

// for(let i = 0; i < glitches.length; i++) {
//     if (glitches[i] > 30) {
//         glitches.splice(i, 1);
//         prices.splice(i, 1);
//         features.splice(i, 1);
//     }
// }
// console.log(glitches, prices, features);

// // Second etap
// let gameName;
// while (true) {
//     gameName = prompt("Type name of game");
//     if (gameName === null  gameName === " "  !isNaN(gameName)) {
//         alert("try again")
//     } else {
//         break;
//     }
// }


// let studioName;
// while (true) {
//     studioName = prompt("Type name of studio");
//     if (studioName === null  studioName === " "  !isNaN(studioName)) {
//         alert("try again")
//     } else {
//         break;
//     }
// }

// let money;
// while (true) {
//     money = Number(prompt("How much momey do you give us?"));
//     if (money === null  money === " "  isNaN(money)  money > 1000) {
//         alert("try again")
//     } else {
//         break;
//     }
// }

// let gameTime;
// while (true) {
//     gameTime = prompt("Type how much time do we have to create game");
//     if (gameTime === null  gameTime === " ") {
//         alert("try again")
//     } else {
//         break;
//     }
// }

// third etap
let quality;
while (true) {
    quality = prompt("standart quality or deluxe?").toLowerCase();


    switch (quality) {
    case "standard":
    alert("Quality of game will be standard.");
    break;

    case "deluxe":
    alert("Quality of game will be deluxe.");
    features.push("Voice Chat", "Modes");
    prices.push(1200, 2900);
    glitches.push(11, 22);
    console.log(glitches, prices, features);
    break;
    default: false;
    break;
}
break;
}

// fourth etap
while (true) {
    let deleteFeatures = prompt(`${features.join(", ")} what to delete?`).toLowerCase();
    
}