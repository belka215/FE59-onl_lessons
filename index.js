const newName = "Jon";
newName.filter((item) => {});

let a = "fewfw";
a = 5;

// const array = new Array(1000).fill(null).map((_, i) => ++i);
// console.log(array);

const testList = [1, 3, 55, 851.3];
// const name = "Jon";
let age = 30;
let city = "Minsk";

const getStringsList = (array) => {
  array.toLowerCase();
};

const newTestList = getStringsList(testList, 15, "Jon", true);
console.log(newTestList);

// document.body.addEventListener("click", () => {
//   const newTestList = getStringsList(testList);
//   console.log(newTestList);
// });

const array = new Array(1000).fill(null).map((_, i) => ++i);

const PERSENT = 0.14;

const newArray = array.map((item) => {
  // console.log(typeof PERSENT); // number
  const sum = PERSENT + item; // 1 на первой итерации

  return sum;
});

// const a = true || false;

// const b = true && false;
