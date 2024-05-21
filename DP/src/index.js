import {
  showModal,
  createCard,
  search,
  showReport,
  saveData,
  hideCard
} from "./scripts/functions.js";


localStorage.clear()
const arrow = document.querySelector('.arrow');
const dropBtn = document.querySelector('.dropdown__dropbtn');
const dropList = document.querySelector('.dropdown__content')
const searchField = document.querySelector('.search-field')
const columns = document.querySelector(".columns")
const report = document.querySelector('.report');
const cancel = document.querySelector('.cancel');
const sendReport = document.querySelector('.send');
let cardData;

fetch('https://6646535251e227f23aae9ab7.mockapi.io/v1/posts')
  .then(response => response.json())
  .then(response => {
    response.forEach(item => {
      createCard(item.id, item.image, item.avatar, item.hashtag, columns)
    })
    return response;
  })
  .then(data => {
    return cardData = { ...data }
  })


dropBtn.addEventListener('click', () => {
  arrow.classList.toggle("active");
  dropList.classList.toggle('opened');
});

columns.addEventListener('click', (event) => {
  const id = event.target.id;
  const cardId = `item-${id.split('-').at(-1)}`;
  const currentCard = columns.querySelector(`#${cardId}`);

  if (event.target.classList.contains('overlay__save')) {
    showModal(currentCard)
  }

  if (event.target.classList.contains('modal__close')) {
    const modal = columns.querySelector('.modal');
    modal.remove();
  }

  if (event.target.classList.contains('overlay__report')) {
    showReport(report)
  }

  if(event.target.classList.contains('boards-container__board')) {
    saveData(event);
  }
})

searchField.addEventListener('input', (event) => {
  search(event, columns, cardData)
})

cancel.addEventListener('click', () => {
  report.classList.remove('flex')
})

sendReport.addEventListener('click', (event) => {
  hideCard(event)
})

// report.addEventListener('click', () => {
//   report.classList.remove('flex')
// })



