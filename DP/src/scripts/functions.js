export function createCard(id, image, avatar, hashtag, columns) {
    const card = document.createElement('figure');
    card.classList.add('columns__item');
    card.id = `item-${id}`;
    card.innerHTML = `
      <div class="img-container">
                      <img src="${image}" alt="" class="columns__item__img">
                      <div class="overlay">
                          <button class="overlay__save btn-red" id="save-btn-${id}">Save</button>
                          <button class="overlay__report">Report</button>
                      </div>
                  </div>
                  <figcaption class="figcaption">
                      <img src="${avatar}" class="figcaption__avatar">
                      <p class="figcaption__hashtag">#${hashtag}</p>
                  </figcaption>`;
    columns.append(card);
    aspectRatio(id, card)
}

export function showModal(currentCard) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    modal.innerHTML = `
    <div class="modal__title">Save to
          <div class="modal__close"></div>
      </div>
      <div class="boards-container">
          <button class="boards-container__board btn-red">Board 1</button>
          <button class="boards-container__board btn-red ">Board 2</button>
          <button class="boards-container__board btn-red">Board 3</button>
      </div>`;
    currentCard.append(modal)
}

export function showReport(report) {
    report.classList.add('flex')
}

function showFilteredCards({ id, image, avatar, hashtag }, columns) {
    const card = document.createElement('figure');
    card.classList.add('columns__item');
    card.id = `item-${id}`;

    card.innerHTML = `
      <div class="img-container">
                      <img src="${image}" alt="" class="columns__item__img">
                      <div class="overlay">
                          <button class="overlay__save btn-red" id="save-btn-${id}">Save</button>
                          <button class="overlay__report">Report</button>
                      </div>
                  </div>
                  <figcaption class="figcaption">
                      <img src="${avatar}" class="figcaption__avatar">
                      <p class="figcaption__hashtag">#${hashtag}</p>
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

export function search(event, columns, cardData) {
    const searchedText = event.target.value;
    cardData = Object.values(cardData)
    const searchedCards = cardData.filter(card => {
        return card.hashtag.includes(searchedText);
    })
    console.log(searchedCards)
    columns.innerHTML = '';

    searchedCards.forEach(card => {
        showFilteredCards(card, columns)
    })
}