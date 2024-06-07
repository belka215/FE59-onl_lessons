"use strict";

// const obj = {
//   id: 675465,
//   title: "Fracture",
//   name: "John",
//   age: 32,
//   gender: "male",
//   street: null,
//   city: undefined,
// };

// const filterNullUndefined = (obj) => {
//   const keyObj = Object.keys(obj); // ['id', 'title', 'name', 'age', 'gender', 'street', 'city'];
//   console.log(keyObj);

//   const filterKeyObj = keyObj.filter(
//     (key) => obj[key] !== null && obj[key] !== undefined
//   ); // ['id', 'title', 'name', 'age', 'gender']
//   console.log(filterKeyObj);

//   return filterKeyObj.reduce((result, key) => {
//     // result === {} на старте самой первой итерации

//     result[key] = obj[key]; // result[key] = 12 - это запись в объект
//     // 1: result['id'] = 675465     =>      {id: 675465}
//     // 2: result['title'] = "Fracture"     =>      {id: 675465, title: "Fracture"}
//     // 3: result['name'] = "John"     =>      {id: 675465, title: "Fracture", name: "John"}
//     // ...

//     return result;
//   }, {}); // {}
// };

// console.log(filterNullUndefined(obj));

////////////////////////////////////////////////////////////////////////////////////////////////////
// Чистые функции:
//  1) функция возвращает всегда один и тот же результат с одними и теми же входными параметрами
// 2) фунция не содержит эффектов:
// а) ображение к переменной вне функции
// б) вывод в консоль
// в) вызов исключения
// г) чтение данных из файл
// д) запросы на сервер
// е) поиск элементов на странице

// const multFn = (a, b) => {
//   return a * b;
// };

// multFn(2, 5); // 10
// multFn(2, 5); // 10
// multFn(2, 5); // 10
// multFn(2, 5); // 10
// multFn(3, 3); // 9
// multFn(3, 3); // 9
// multFn(3, 3); // 9
// multFn(3, 3); // 9
////////////////////////////////////////////////////////////////////////////////////////////////////
// первого класса и высшего порядка
// const a = (item) => {
//   console.log(item);
// };

// [1, 3].forEach((item) => {
//   console.log(item);
// });

// function forEach(callback) {
//     // ...
// }

////////////////////////////////////////////////////////////////////////////////////////////////////
// Иммутабельность

// const newObj = {
//   id: 675465,
//   title: "Fracture",
//   name: "John",
//   age: 32,
//   gender: "male",
//   street: null,
//   city: undefined,
// };

// const newFn = () => {
//   //   Object.entries(newObj).forEach((item) => {
//   //     // [['id', 675465], ['title', "Fracture"], ...]
//   //     // 1: item = ['id', 675465];
//   //     // 2: item = ['title', "Fracture"];
//   //     const [key, value] = item;

//   //     if (value === null || value === undefined) {
//   //       delete newObj[key];
//   //     }
//   //   });

//   const result = {};

//   Object.entries(newObj).forEach((item) => {
//     // [['id', 675465], ['title', "Fracture"], ...]
//     // 1: item = ['id', 675465];
//     // 2: item = ['title', "Fracture"];
//     const [key, value] = item;

//     if (value !== null && value !== undefined) {
//       result[key] = obj[key];
//     }
//   });

//   return result;
// };

// const newObj = newFn();

// const newObj = {
//     id: 675465,
//     title: "Fracture",
//     name: "John",
//     age: 32,
//     gender: "male",
//};

// Object.assign(newObj);

// const body = document.body;
// body.style.backgroundColor = "red";

////////////////////////////////////////////////////////////////////////////////////////////////////
// C массивом данных пользователей (Lesson_36.md) сделать следующий
// задачи, используя map/reduce вместо for, forEach:
// 1. Получить строку с именами и фамилиями всех пользователей через
// запятую.
// 2. Создать массив из emails по алфавиту.
// 3. Создать новый массив пользователей, где объект пользователя должен
// содержать только id и поле, отвечающее за имя пользователя(например
// username), которое должно содержать имя и фамилию.
// 4. Создать массив юзеров, где они отсортированы по возрасту по
// возрастанию и все пользователи младше 40 лет.
// 5. Получить объект, где были бы
// a) данные о среднем возрасте пользователей
// b) количество пользователей старше 30
// c) количество пользователей старше 40
// d) количество пользователей старше 18
// 6. Создать объект, где ключ, это первая буква фамилии, а значение -
// массив из фамилий пользователей начинающихся на эту букву. Объект
// должен состоять только из ключей существующих фамилий в этом
// массиве. Например в этом массиве нет фамилии с букву Y, а значит и
// такого поля не должно быть в объекте. Пример того, что надо получить,
// когда пользователи имеют следующие фамилии Snow, Felton , Ford,
// Ferdinand:
// { s: [‘Snow’], f: ['Felton', 'Ford', 'Ferdinand' }

const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    age: 23,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    age: 20,
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    age: 40,
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    age: 36,
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    age: 70,
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    age: 45,
  },
];

// const getUserNameAndSurname = (users) => {
//   return users
//     .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
//     .join(", ");
// };

// console.log(getUserNameAndSurname(users));

// const getSortedEmails = (users) => {
//   return users.map((user) => user.email).sort();
// };

// console.log(getSortedEmails(users));

// const getUpdatedUsers = (users) => {
//   // return users.map(users => ({id: users.id, username: users.first_name + " " + users.last_name}));

//   return users.reduce((result, { id, first_name, last_name }) => {
//     // result.push({
//     //   id,
//     //   username: `${first_name} ${last_name}`,
//     // });
//     // return result;

//     return [{ id, username: `${first_name} ${last_name}` }, ...result];
//   }, []);
// };

// console.log(getUpdatedUsers(users));

// const getUsersUnderForty = (users) => {
//   return users.filter((user) => user.age < 40).sort((a, b) => a.age - b.age);
//   //   return users.reduce((result, { age, ...rest }) => {
//   //     if (age < 40) {
//   //       result.push({ age, ...rest });
//   //     }
//   //     return result.sort((a, b) => a.age - b.age);
//   //   }, []);
// };

// console.log(getUsersUnderForty(users));

// const getInfo = (users) => {
//   return users.reduce(
//     (result, user, index, currentArray) => {
//       const { age } = user;

//       result.averageAge += age;

//       if (index === currentArray.length - 1) {
//         result.averageAge /= currentArray.length;
//       }

//       if (age > 30) {
//         result.older30++;
//       }

//       if (age > 40) {
//         result.older40++;
//       }

//       if (age > 18) {
//         result.older18++;
//       }

//       return result;
//     },
//     { averageAge: 0, older30: 0, older40: 0, older18: 0 }
//   );
// };

// console.log(getInfo(users));

// const getUsersSurname = (users) => {
//   return users.reduce((result, { last_name }) => {
//     //const last_name = 'Lawson';
//     // Ferguson
//     // Funke
//     // Fields
//     // Edwards
//     // Howell

//     const firstLetter = last_name[0].toLowerCase(); // l // f // f

//     if (!result[firstLetter]) {
//       result[firstLetter] = []; // {l: []} // // {l: [], f: []}
//     }

//     result[firstLetter].push(last_name); // {l: ['Lawson'], f: ['Ferguson']} // {l: ['Lawson'], f: ['Ferguson', 'Funke']}

//     return result; // {l: ['Lawson'], f: ['Ferguson']} // {l: ['Lawson'], f: ['Ferguson', 'Funke']}
//   }, {});
// };

// console.log(getUsersSurname(users));
////////////////////////////////////////////////////////////////////////////////////////////////////
// Бинарный поиск
const array = new Array(240000).fill(null).map((_, i) => ++i); // [1, 2, 3, ..., 240000] и он отсортирован 212000

// [180000, ..., ..., 239999]

const index = array.findIndex((item) => item === 212000);

const binarySearch = (array, value) => {
  let start = 0;
  let end = array.length;
  let countIterations = 1;

  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2);

    if (array[midIndex] === value) {
      return { midIndex, countIterations };
    }

    if (value < array[midIndex]) {
      end = midIndex - 1;
    } else {
      start = midIndex + 1;
    }

    ++countIterations;
  }
};

// console.log(array.length, binarySearch(array, 125000)); // 18
// console.log(array.length, binarySearch(array, 239000)); // 18
console.log(array.length, binarySearch(array, 120001)); // 1

// 240000 / 120000 / 60000 / 30000 / 15000 / 7500 / 3750 / 1875 / 932 / 461 / 230 / 115 / 57 / 28 / 14 / 7 / 3 / 1 // 18
