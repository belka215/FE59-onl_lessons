// import { handleClock } from "./clock.js";
// import {trafficLights} from './traffic-lights.js';

// const showModalBtn = document.querySelector(".header__show-modal");
// const modal = document.querySelector(".modal");
// const modalCloseBtn = document.querySelector(".modal__close");

// showModalBtn.addEventListener("click", (event) => {
//   modal.classList.add("modal_show");

//   setTimeout(() => {
//     modalCloseBtn.classList.add("modal__close_show");
//   }, 5000);
// });

// modalCloseBtn.addEventListener("click", (event) => {
//   modal.classList.remove("modal_show");
// });

// handleClock();

// console.log("Start", new Date().toLocaleTimeString());

// const arrayy = new Array(10000)
//   .fill(null)
//   .map((_, i) => ++i)
//   .map((item) => item ** item)
//   .map((item, _, array) => array.filter((item) => item % 5));
// console.log(arrayy);

// console.log("End", new Date().toLocaleTimeString());


// trafficLights();

const direction = ["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"];

function reverseDir (direction) {
  direction.forEach(dir => {
    const letter = dir.split(' ').at(-1);
    return letter
  })
  const arrayL = [];
    arrayL.push(letter)
    console.log(arrayL)
}

reverseDir(direction)