// task 1 - method 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (friend of friends) {
    string += friend + ", ";
}
console.log(string.slice(0, -2));
// task 1 - method 2
const friend2 = ["Mango", "Poly", "Kiwi", "Ajax"];
friend2.join(", ");
console.log(friend2);

// task 2
const cards = [
    "card 1",
    "card 2",
    "card 3",
    "card 4",
    "card 5"
];
cards.splice(1, 1); // deletes card 2 
console.log(cards);
// 3
cards.push("card 6"); // adds card 6
console.log(cards);
// 4 
cards[3] = "card 4 - updated";
console.log(cards);