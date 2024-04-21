"use strict";

// Task 1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// fibonacci.forEach((item) => {
//     console.log(item);
// });

// fibonacci.forEach(function(item) {
//     console.log(item)
// })


// Task 2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// const result = users.map((item, index) => (`member ${index + 1}: ${item}`));

// console.log(result);

// function result(names) {
//     return names.map((item, index) => (`member ${index + 1}: ${item}`));
// }


// console.log(result(users));


// Task 3

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const positive = numbers.filter((number) => number > 0);
// console.log(positive);

// function positive(numbers) {
//     return numbers.filter((number) => number > 0)
// }

// console.log(positive(numbers));


// Task 4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// const result = fibonacci.reduce((sum, item) => sum + item, 0);

// console.log(result)

// function result(num) {
//     return num.reduce((sum, item) => sum + item, 0);
// }

// console.log(result(fibonacci));


// Task 5

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const evenNum = numbers.find((num) => {
//     if (num % 2 === 0) {
//         return num;
//     }
// });

// console.log(evenNum);

// function evenNum(num) {
//     return numbers.find((item) => item % 2 ===0 )
// }

// console.log(evenNum(numbers))


// Task 2.2

// const str = ('This website is for losers LOL!');

// const newStr = (string) => {
//     return string.replace(/[aeiou]/ig, '');
// }

// console.log(newStr(str))

// function newStr(string) {
//     return str.replace(/[aeiou]/ig, '');
// }

// console.log(newStr(str))


// Task 2.3

// const str = 'jhdbkj'

// function accum(word) {
//     return str.split('').map((item, index) => {
//         return item.repeat(index + 1)
//     }).join('-')
// }

// console.log(accum(str));


// Task 2.4

// const numbers = '-21 2 3 4 5 -6';

// function highAndLow(numbers) {
//     const nums = numbers.split(' ');
//     const array = [];
//     for (let i = 0; i < nums.length; ++i) {
//         array.push(parseInt(nums[i]))
//     }
//     const maxNum = Math.max.apply(null, array);
//     const minNum = Math.min.apply(null, array);
//     console.log(maxNum, minNum)
// }

// highAndLow(numbers)


// Task 2.5 

// const word = "tomy";

// function isIsogram(word) {
//     const array = word.toLowerCase().split('');
//     array.every((item) => {
//         console.log(item)
        // for (let i = 0; i < array.length; ++i) {
        //     console.log(item)
        //     if (item === array[i]) {
        //         return false
        //     } else {
        //         return true
        //     }
        // }
//     })
// }

// console.log(isIsogram(word));







