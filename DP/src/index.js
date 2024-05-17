import {
  showModal,
  createCard,
  search
} from "./scripts/functions.js";

const arrow = document.querySelector('.arrow');
const dropBtn = document.querySelector('.dropdown__dropbtn');
const dropList = document.querySelector('.dropdown__content')
const searchField = document.querySelector('.search-field')
const columns = document.querySelector(".columns")
const saveBtn = document.querySelector('.overlay__save');
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
})

searchField.addEventListener('input', (event) => {
  search(event, columns, cardData)
})

