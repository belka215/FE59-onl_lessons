// Task 1

// const var1 = 'true';
// const var2 = false;
// const var3 = 17;
// const var4 = undefined;
// const var5 = null;

// console.log(typeof var1, typeof var2, typeof var3, typeof var4, typeof var5);


// Task 2

// const height = 22;
// const width = 20;

// if (height > width) {
//     console.log(height);
// } else {
//     console.log(width);
// }

// console.log(height > width ? height : width);


// Task 3

// for(let i = 0; i < 20; ++i){
//     if (i % 3 === 0) {
//         console.log(i)
//     }
// }


// Task 4

// const key = true;
// const documents = true;
// const pen = true;
// const apple = false;
// const orange = true;

// const shouldGoToWork = key && documents && pen && (apple || orange);

// console.log(shouldGoToWork);


// Task 5

// let number = Number(prompt('Введите число'));

// if ((number % 5 === 0) && (number % 3 === 0)) {
//     console.log('FizBuz')
// } else if (number % 3 === 0) {
//     console.log('Buz')
// } else if (number % 5 === 0) {
//     console.log('Fiz')
// }


// Task 6

// let age = Number(prompt('Сколько вам лет?'));

// if (age >= 18) {
//     alert('Попей пивка')
// } else if (age >= 16 && age < 18) {
//     alert('Можешь выкурить сигаретку, только маме не говори')
// } else {
//     alert('Пей колу')
// }


// Task 7

// let direction = prompt('В какую сторону света вы бы хотели отправиться?');

// switch (direction) {
//     case 'юг':
//         alert('на юг пойдешь счастье найдешь');
//         break;
//     case 'север':
//         alert('на север пойдешь много денег найдешь');
//         break;
//     case 'запад':
//         alert('на запад пойдешь верного друга найдешь');
//         break;
//     case 'восток':
//         alert('на восток пойдешь разработчиком станешь');
//         break;
//     default:
//         alert('Попробуйте еще раз!');
// }


// Task 8

// const name = 'пОлИнА нАбЕрЕжНаЯ';

// const space = name.indexOf(' ');

// console.log(`Привет, ${name[0].toUpperCase()}${name.slice(1, space).toLowerCase()} ${name[space + 1].toUpperCase()}${name.slice(space + 2, name.length).toLowerCase()}!`);


// Task 9

// let num1 = Number(prompt('Напишите число'));
// let num2 = Number(prompt('Сколько отнять от предыдущего?'));
// let num3 = Number(prompt('Сколько прибавить к предыдущему?'));
// let num4 = Number(prompt('На сколько умножить?'));
// let num5 = Number(prompt('На сколько разделить?'));

// alert(`((((${num1} - ${num2}) + ${num3}) * ${num4}) / ${num5} = ${(((num1 - num2) + num3) * num4) / num5})`);


// Task 10

const grid = '#';

for (let i = 1; i < 7; ++i) {
    console.log(grid.repeat(i))
}
 
      
         