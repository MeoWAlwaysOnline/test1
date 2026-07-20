// task 1
function logItems(array) {
    let num = 0;
    for (element of array) {
       num++;
       console.log(`${num} - ${element}`)
    }
}
logItems(["Mango", "Poly", "Ajax"]);
// task 2
function calculateEngravingPrice(message, pricePerWord) {
    let wordsArray = message.split(" ");
    let totalWords = wordsArray.length;
    console.log(`${totalWords} words will cost you ${pricePerWord * totalWords} hryvnas`)
}
calculateEngravingPrice("Made in Ukraine", 30)
// task 3
function findLongestWord(string) {
    let longestString = string[0];
    for (element of string) {
       if (longestString.length < element.length) {
         longestString = element;
       }
    }
return (longestString);
}
findLongestWord(["china", "made", "chargoggagoggmanchauggagoggchaubunagungamaugg", "nine", "circles"]);
// task 4
function formatString(string) {
    // string = "chargoggagoggmanchauggagoggchaubunagungamaugg is a REAL name of lake :)"
    if (string.length > 40) {
        let stringSliced = string.slice(0, 37);
        let stringEnd = stringSliced + "..."
        console.log(stringEnd)
    } else {
        return string;
        console.log(string)
    }
}
formatString("chargoggagoggmanchauggagoggchaubunagungamaugg is a REAL name of lake :)");
// task 5
function checkForSpam(message) {
    message.toLowerCase();
    if (message.includes("spam") || message.includes("sale")) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkForSpam("It's not a SpAM here's the SAlE");
// task 6
let input = "1, 2, 3".split(", "); // Вибачте що тут нема промпта, тому що я не можу перевірити з ним
let total = 0;
for (let element of input) {
    total += Number(element); 
}

console.log(total);
// task 7
function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(login, allLogins) {
    return !allLogins.includes(login);
}

function addLogin(login, allLogins) {
    allLogins = ["admintest123", "sigma", "6777", "aura"];

    if (isLoginValid(login) === false) {
        console.log("Your login isn't valid! Try again");
        return;
    }

    if (isLoginUnique(login, allLogins) === false) {
        console.log("Your login is being used! Try again")
    } else {
        allLogins.push(login);
        console.log("Your login has been registered, welcome!")
    }
    console.log(allLogins);
}
addLogin("isItWorkingOrNo");