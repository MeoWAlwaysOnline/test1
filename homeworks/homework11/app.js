// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 
let bankAccount = {
    ownerName: "Mykola" ,
    accountNumber: 777,
    balance: 1000,
    deposit:function (add) {
        return this.balance = this.balance + add;
    },
    withdraw:function (subtract) {
        return this.balance = this.balance - subtract
    }
};

let depositOrWithdraw = true; // Заміна confirm міняйте або true або false
if (depositOrWithdraw === true) {
    console.log(`${bankAccount.deposit(15)}грн зараз на балансі`);
} else {
    console.log(`${bankAccount.withdraw(15)}грн зараз на балансі`);
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
let weather = {
    temperature: -1,
    humidity: 30,
    windSpeed: 20,
    isTempLow:function () {
        return this.temperature < 0;
    }
}
if (weather.isTempLow() === true) {
    console.log("temperature is lower than 0 celsium")
} else {
    console.log("temperature is higher than 0 celsium or equals 0 celsium")
}
// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
let user = {
    name: "Mykola",
    email: "mykola.kokos@gmail.com",
    password: "kokosisthebest",
    login:function (emailToEnter, passToEnter) {
        if (emailToEnter.includes(this.email) && passToEnter.includes(this.password)) {
            console.log("Email and password are correct. Welcome!")
        } else {
            console.log("Email or password is incorrect. Try again!")
        }
    }
};
user.login("mykola.kokos@gmail.com", "kokosisthebest");
// // Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
let movie = {
    title: "Tom and jerry",
    director: "Mykola",
    year: 1999,
    rating: 8,
    isMovieGood:function () {
        return this.rating > 8;
    }
};
console.log({...movie, isMovieGood: movie.isMovieGood()});