// task 1
let user = {
    hobby: "swimming",
    premium: true,
};
user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;
for (key in user) {
    console.log(`${key}: ${user[key]}`)
};

// task 2
let something1 = {
    apple: 100,
    banana: 120,
    kokos: 111222333444555666777888999000
};
let quantityValues1 = Object.values(something1).length;
console.log(quantityValues1);

// task 3
function findBestEmployee(employees) {
    tasksToComplete = 30;
    // employees = {
    //     kokos: 25,
    //     mango: 30,
    //     mykola: 1,
    //     sigma: 30
    // }
    let theBestEmployee = Object.values(employees);
    console.log(`The best score is: ${Math.max(...theBestEmployee)}`); // я не розібрався як получити ім'я :(
};
findBestEmployee({kokos: 25, mango: 29, mykola: 1, sigma: 30});

// task 4
function countTotalSalary(employees) {
    employees = {
        kokos: 111,
        mykola: 1000,
        sigma: 10000
    };
    let total = 0;
    for (key in employees) {
        total += employees[key];
    };
    return total;
};
console.log(countTotalSalary());
// task 5 не зрозумів

// task 6
allProdcuts = [
        {name: "kokos", price: 100, quantity: 10},
        {name: "drone", price: 10000, quantity: 100},
        {name: "mango", price: 99, quantity: 10}
];
function calculateTotalPrice(allProdcuts, productName) {
    for (product of allProdcuts) {
        if (productName === product.name) {
            return product.price * product.quantity;
        }
    };
    return 0 + " not found";
};
console.log(calculateTotalPrice(allProdcuts, "kokos"));