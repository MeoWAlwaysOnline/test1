// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let array1 = [5, 7, 15];
array1.splice(1, 1, 10)
console.log(array1)
// Створити масив із трьох рядків. Додати до масиву ще одну рядків - напевно тут треба додати 1 рядок?.
let array2 = ["audi", "porshe", "lamborgini"];
array2.push("BMW");
console.log(array2);
// Створити скрипт який поверне суму всіх чисел в масиві.
let array3 = [222, 333, 112];
let total = array3[0] + array3[1] + array3[2];
console.log(`${array3[0]} + ${array3[1]} + ${array3[2]} = ${total}`)
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
let array4 = [1, 2, 3, 4, 5];
for (let element = 0; element < array4.length; element++) {
   console.log(array4[element]);
}
// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
let array5 = ["UAE", "ukraine", "usa", "poland", "germany"];
for (let element = 0; element < array5.length; element++) {
   if (array5[element].length >= 5) {
      console.log(array5[element]);      
   }

}
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let array6 = [5, 2, 4, 3, 6, 7, 8, 999, 1, 77];
let maxNumber = array6[0];
for (let number of array6) {
    if (number > maxNumber) {
       maxNumber = number;
    }
}
console.log(maxNumber);
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
let array7 = [5, 2, 4, 3, 6, 7, 8, 999, 1, 77];
for (let number of array7) {
    if (number % 2 === 0) {
        console.log(number)
    }
}