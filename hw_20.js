"use strict"

// Task 1

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);


// Task 2

// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals.at(-1));


// Task 3

// const numbers = [5, 43, 63, 23, 90];
// numbers.splice(0, numbers.length)

// for (let i = 0; i < numbers.length; ++i) {
//     delete numbers[i];
// }

// console.log(numbers)


// Task 4

// const students = ['Polina', 'Dasha', 'Masha'];

// students.pop();
// students.push('Borya');
// students.shift();
// students.unshift('Andrey');
// console.log(students);


// Task 5

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (const cat of cats) {
//     console.log(cat)
// };

// for (let i = 0; i < cats.length; ++i) {
//     console.log(cats[i])
// }


// Task 6

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const numbers = evenNumbers.concat(oddNumbers);

// console.log(numbers);
// console.log(numbers.indexOf(8));


// Task 7

// const binary = [0, 0, 0, 0];
// console.log(binary.join(1).toString());


// Task 8

// const palindrome = 'шалаш';

// const reverseWord = palindrome.split('').reverse().join("");

// if (palindrome === reverseWord) {
//     console.log(`${palindrome} - это палиндром`)
// } else {
//     console.log(`${palindrome} - это не палиндром`)
// }


// Task 9

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// const average = [];

// for (let i = 0; i < matrix.length; ++i) {
//     let result = matrix[i].reduce(function(sum, current) {
//         return sum + current
//     },0);
//     average.push(result / matrix[i].length);
// }

// console.log(average);


// Task 10

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// const positive = mixedNumbers.filter(function(number){
//     return number > 0;
// })

// const negative = mixedNumbers.filter(function(number){
//     return number < 0;
// })

// console.log(positive, negative);


// Task 11

const numbers = [];
const newNumbers = [];

for (let i = 0; i < 6; ++i) {
    let number = Math.trunc(Math.random() * 100);
    numbers.push(number);
}

for (let i = 0; i < numbers.length; ++i) {
    let newNumber = Math.pow(numbers[i], 3);
    newNumbers.push(newNumber);
}

console.log(numbers, newNumbers);



