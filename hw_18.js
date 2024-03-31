"use strict";


// Task 1

// const lastNumber = 5;
// let sum = 0;

// function getSum() {
//     for (let i = 0; i <= lastNumber; ++i){
//         sum += i;
//     }
//     return sum;
// }

// console.log(getSum(lastNumber));


// Task 2

// const loan = 100;
// const years = 5;
// const interest = 0.17;
// let overpay = 0;

// function loanInterest() {
//     for (let i = years; i >= 1; --i) {
//         const yearPay = loan / years;
//         overpay += (yearPay * i) * interest;
//     }
//     return overpay;
// }

// console.log(loanInterest(loan, years, interest).toFixed(2));


// Task 3

// let string = 'longstring';
// const cutFrom = 3;
// const cutTo = 7;

// function trimString() {
//     let newString = string.slice(cutFrom, cutTo);
//     return newString;
// }

// console.log(trimString(string, cutFrom, cutTo));


// Task 4

// const num = 2020;
// let sum = 0;

// function getSumNumbers() {
//     const numToString = num.toString();
//     const digits = numToString.split('');
//     for (let i = 0; i < numToString.length; ++i) {
//         sum = sum + Number(numToString[i]);
//     }
//     return sum;
// }

// console.log(getSumNumbers(num));


// Task 5

// const firstNum = -1;
// const lastNum = 2;
// let sum = 0;

// function getSumNumbers() {
//     if (firstNum !== lastNum) {
//         for (let i = firstNum; i <= lastNum; ++i) {
//             sum += i;
//         }
//         console.log(sum);
//     } else {
//         console.log(firstNum);
//     }
// }

// getSumNumbers(firstNum, lastNum);


// Task 6

// const boolean = true;

// function foo() {
//     console.log('foo');
// }
   
// function boo() {
//     console.log('boo');
// }
// function fooBoo() {
//     if (boolean == true) {
//         foo();
//     } else {
//         boo();
//     }
// }

// fooBoo(boolean);


// Task 7

// const a = 2;
// const b = 3;
// const c = 4;

// function isTriangle() {
//     return (a + b > c && a + c > b && b + c > a); 
// }

// console.log(isTriangle(a,b,c));


// Task 8

// const m = 6;
// const n = 4;

// function divideChocolate() {
//     if (m > 0 && n > 0) {
//         console.log(n * m - 1);
//     } else {
//         console.log(0);
//     }
// }

// divideChocolate(m, n);


// Task 9


