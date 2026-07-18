// Тема 9. Функції

// 1. Написати функцію sayHello(), яка просто виводить у консоль рядок "Привіт, світ!".
// =========
// function sayHello() {
//     return console.log("Hello world");
// }
// const string = sayHello();
// console.log(string);
// =========
// 2. Створити функцію greetUser(name), яка приймає ім'я користувача та виводить "Привіт, [ім'я]!".
function greetUser(name) {
    return `hello ${name}`;
}
console.log(greetUser("Mykola"))
// 3. Написати функцію sum(a, b), яка повертає суму двох чисел.
function sum(a, b) {
    let total = `${a + b}`;
    return `${a} + ${b} = ${total}`
} 
console.log(sum(5, 5))
// 4. Створити функцію isEven(num), яка повертає true, якщо число парне, і false, якщо непарне.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
// 5. Написати функцію square(num), яка повертає квадрат переданого числа.
function square(num) {
    return Math.pow(num, 2);
}
console.log(square(2));
// 6. Створити функцію min(a, b), яка повертає менше з двох чисел.
function min(a, b) {
    return Math.min(a, b);
}
console.log(min(555, 777))
// 7. Написати функцію isAdult(age), яка повертає true, якщо вік 18 або більше, і false в іншому випадку.
// 8. Створити функцію generateEmail(username, domain), яка зшиває їх у рядок username@domain.
// 9. Написати функцію calculateDiscount(price, percent), яка повертає суму знижки.
// 10. Створити функцію multiplyByTwo(num), якщо аргумент не передано, вона має використовувати дефолтне значення 1.
// 11. Написати функцію formatPrice(amount), яка додає знак гривні "₴" до числа і повертає рядок.
// 12. Створити функцію celsiusToFahrenheit(celsius), яка конвертує температуру за формулою.
// 13. Написати функцію stringLength(str), яка повертає кількість символів у рядку.
// 14. Створити функцію getLastElement(array), яка повертає останній елемент будь-якого масиву.
// 15. Написати функцію countVowels(str), яка повертає кількість голосних літер у рядку.
// 16. Створити функцію truncateString(str, maxlength), яка обрізає рядок до вказаної довжини й додає "...".
// 17. Написати функцію sumTo(n), яка рахує суму всіх чисел від 1 до n за допомогою циклу.
// 18. Створити функцію getCurrencyName(code), яка приймає "USD", "EUR", "UAH" і повертає повну назву валюти через switch.
// 19. Написати функцію checkSpam(str), яка повертає true, якщо рядок містить слова "sale" або "free" (без урахування регістру).
// 20. Створити функцію getAverage(a, b, c), яка обчислює середнє арифметичне трьох чисел.