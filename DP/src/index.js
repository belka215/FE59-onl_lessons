const arrow = document.querySelector('.arrow');
const dropBtn = document.querySelector('.dropbtn');
const searchField = document.querySelector('.search-field')
const columns = document.querySelector(".columns")
const saveBtn = document.querySelector('.overlay__save');
let cardData;

fetch('https://6646535251e227f23aae9ab7.mockapi.io/v1/posts')
  .then(response => response.json())
  .then(response => {
    response.forEach(item => {
      createCard(item.id, item.image, item.avatar, item.hashtag)
    })
    return response;
  })
  .then(data => {
    return cardData = { ...data }
  })


dropBtn.addEventListener('click', () => {
  arrow.classList.toggle("active");
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

function showModal(currentCard) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'modal';
  modal.innerHTML = `
  <div class="modal__title">Save to
        <div class="modal__close"></div>
    </div>
    <div class="boards-container">
        <button class="boards-container__board">Board 1</button>
        <button class="boards-container__board">Board 2</button>
        <button class="boards-container__board">Board 3</button>
    </div>`;
  currentCard.append(modal)
}

function createCard(id, image, avatar, hashtag) {
  const card = document.createElement('figure');
  card.classList.add('columns__item');
  card.id = `item-${id}`;
  card.innerHTML = `
    <div class="img-container">
                    <img src="${image}" alt="" class="columns__item__img">
                    <div class="overlay">
                        <button class="overlay__save" id="save-btn-${id}">Save</button>
                        <button class="overlay__report">Report</button>
                    </div>
                </div>
                <figcaption class="figcaption">
                    <img src="${avatar}" class="figcaption__avatar">
                    <p class="figcaption__hashtag">${hashtag}</p>
                </figcaption>`;
  columns.append(card);
  aspectRatio(id, card)
}

function showFilteredCards({id, image, avatar, hashtag}){
  const card = document.createElement('figure');
  card.classList.add('columns__item');
  card.id = `item-${id}`;

  card.innerHTML = `
    <div class="img-container">
                    <img src="${image}" alt="" class="columns__item__img">
                    <div class="overlay">
                        <button class="overlay__save" id="save-btn-${id}">Save</button>
                        <button class="overlay__report">Report</button>
                    </div>
                </div>
                <figcaption class="figcaption">
                    <img src="${avatar}" class="figcaption__avatar">
                    <p class="figcaption__hashtag">${hashtag}</p>
                </figcaption>`;
  columns.append(card);
  aspectRatio(id, card)
}

function aspectRatio(id, card) {
  const img = card.querySelector('.columns__item__img');
  if (id % 2 === 0) {
    img.classList.add("two")
  }
  if (id % 3 === 0) {
    img.classList.add('three')
  } else {
    img.classList.add('one')
  }
}

function search(event, columns) {
  const searchedText = event.target.value;
  cardData = Object.values(cardData)
  const searchedCards = cardData.filter(card => {
    return card.hashtag.includes(searchedText);
  })
  console.log(searchedCards)
  columns.innerHTML = '';

  searchedCards.forEach(card => {
    showFilteredCards(card)
  })
}

searchField.addEventListener('input', (event) => {
  search(event, columns)
})

