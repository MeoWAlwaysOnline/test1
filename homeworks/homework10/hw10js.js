// task 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут
function countItems(array, condition) {
    let count = 0;

    for (const element of array) {
        if (condition(element) === true) {
            count++;
        }
    }
    return count;
}

// Умови для перевірки
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

// task 2
// Функція calculate тут
let calculate = (a, b, operation) => {
    if (operation === divide && a === 0 || b === 0) {
        return "Divide by 0 or on 0"
    } else {
        return operation(a, b);
    }
};
// Стрілкові функції для операцій тут
let add = (a, b) => a + b; 
let subtract = (a, b) => a - b; 
let multiply = (a, b) => a * b; 
let divide = (a, b) => a / b; 
// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку

// task 3
function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        console.log(messageCreator)
    };
};
repeatMessage(5, "hello world! Should repeat 5 times");

// task 4 дуже не понятно поянено, даже через ші пропускав не поняв