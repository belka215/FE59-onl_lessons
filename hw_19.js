"use strict";

// Task 1

// const puppy = {
//     name: "Tusk",
//     breed: "beagle",
// }

// delete puppy.breed;
// delete puppy.name;


// Task 2

// const puppy = {
//     name: "Alfa",
//     breed: "malamute",
// }

// console.log("name" in puppy);


// Task 3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (let key in student) {
//     console.log(key);   
// }

// for (let key in student) {
//     console.log(student[key]);
// }


// Task 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий',
//     },
// }

// console.log(colors["ru pum pu ru rum"].red);
// console.log(colors["ru pum pu ru rum"].blue);


// Task 5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     igor: 664,
//     alexandra: 199
// }

// let salariesSum = 0;
// for (let key of Object.values(salaries)) {
//     salariesSum += key;
// }

// const averageSalary = salariesSum / Object.keys(salaries).length;

// console.log(averageSalary);


// Task 6. Пока не могу сообразить, как это сделать. Всё что я нашла в гугле связано с глубоким сравнением и рекурсией, и мне тоже не понятно

// const login = prompt('Enter login');
// const password = prompt('Enter password');

// const entryInfo = {
//     login,
//     password,
// }

// const confirmLogin = prompt('Confirm your login');
// const confirmPassword = prompt('Confirm your password');

// const confirmInfo = {
//     login,
//     password,
// }

// function validation(entryInfo, confirmInfo) {
//     if (Object.values(entryInfo) === Object.values(confirmInfo)) {
//         alert('Welcome')
//     } else {
//         alert('Wrong. Try again')
//     }
// }

// validation(entryInfo, confirmInfo);


// Task 7

// const goals = {
//     0: "ноль",
//     1: "один",
//     2: "два",
//     3: "три",
//     4: "четыре",
//     5: "пять",
//     6: "шесть",
//     7: "семь",
//     8: "восемь",
//     9: "девять",
// }

// const score = '3:6';

// const team_1 = Number(score.at(0));
// const team_2 = Number(score.at(-1));

// console.log(`Матч завершился со счетом ${goals[team_1]} ${goals[team_2]}`);


// Task 9

// const animals = {
//     cat: {
//         name: 'Енчик',
//         age: 3,
//     },
//     dog: {
//         name: 'Орео',
//         age: 2,
//     }
// }

// console.log(animals.bird?.name);
