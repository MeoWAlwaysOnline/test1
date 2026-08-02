// 4
const salary = {
    dexter: 100000,
    masuchka: 50000,
    debra: 10000
};
let sum = 0;
for (let item in salary) {
    sum += salary(item);
};
console.log(sum);
// 65. Написати функцію, яка за допомогою for...in помножує всі числові властивості об'єкта на 2.
// 66. За допомогою циклу for...in знайти ключ об'єкта, який має найбільше числове значення.
let maxNumbers = {
    first: 1,
    second: 68,
    third: 777
};
for (let number in maxNumbers) {
    console.log(number)
}
// 67. Отримати масив усіх ключів об'єкта за допомогою вбудованого методу Object.keys().
let something = {
    orange: 20,
    banana: 40,
    apple: 67
};
console.log(Object.keys(something));
// 69. Порахувати кількість властивостей об'єкта, використовуючи Object.keys() та властивість .length.
console.log(Object.keys(something).length);
// 71. Використати Object.values() для знаходження середнього арифметичного всіх числових значень в об'єктіse something);
let sum1 = 0;
for (let value of values) {
    sum1 += value;
}
let color = sum1 / values.length;
console.log(color)
// 72. Перевірити, чи є об'єкт абсолютно порожнім, за допомогою Object.keys().
let qwe = {
    asd: 123,
    zxc: 456
};
let test = Object.keys(qwe);
if (qwe = "") {
    console.log("none");
} else {
    console.log("smth");
}
// 73. Написати функцію, яка приймає об'єкт і повертає новий об'єкт, але тільки з тими властивостями, значення яких є рядками.
function getstringprop(obj) {
    let result = {};
    for (let key in obj) {

    }
}
// 74. За допомогою Object.entries() та циклу for...of... вивести інформацію про об'єкт у форматі: "Ключ: [key], Значення: [value]".
// 75. Створити функцію, яка копіює всі властивості з одного об'єкта в інший за допомогою перебору Object.keys().
// 76. Перевірити, чи містить масив, отриманий з Object.keys(), певний рядок-ключ за допомогою .includes().
// 77. За допомогою Object.values() перевірити, чи є серед значень об'єкта логічне значення true.
// 78. Написати функцію, яка фільтрує об'єкт: видаляє з нього ті властивості, значення яких менші за 100.
// 79. Створити об'єкт, де ключі — це назви товарів, а значення — ціни. За допомогою Object.entries() знайти найдешевший товар.
// 80. Написати функцію, яка міняє місцями ключі та значення в об'єкті (значення стають ключами, а ключі — значеннями).