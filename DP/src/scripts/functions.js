export function createCard(id, image, avatar, hashtag, columns) {
    const card = document.createElement('figure');
    card.classList.add('columns__item');
    card.id = `item-${id}`;
    card.innerHTML = `
      <div class="img-container">
                      <img src="${image}" alt="" class="columns__item__img" id="img-${id}">
                      <div class="overlay">
                          <button class="overlay__save btn-red" id="save-btn-${id}">Save</button>
                          <button class="overlay__report">Report</button>
                      </div>
                  </div>
                  <figcaption class="figcaption">
                      <img src="${avatar}" class="figcaption__avatar" id="ava-${id}">
                      <p class="figcaption__hashtag" id="hashtag-${id}">#${hashtag}</p>
                  </figcaption>`;
    columns.append(card);
    aspectRatio(id, card)
}

export function showModal(currentCard) {
    let modal = document.querySelector('.modal');
    if(modal) {
        modal.remove();
    }
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    modal.innerHTML = `
    <div class="modal__title">Save to
          <div class="modal__close"></div>
      </div>
      <div class="boards-container">
          <button class="boards-container__board btn-red" id="board-1">Board 1</button>
          <button class="boards-container__board btn-red" id="board-2">Board 2</button>
          <button class="boards-container__board btn-red" id="board-3">Board 3</button>
      </div>`;
    currentCard.append(modal)
}

export function showReport(report) {
    const modal = document.querySelector('.modal');
    if(modal) {
        modal.remove();
    }
    report.classList.add('flex')
}

function showFilteredCards({ id, image, avatar, hashtag }, columns) {
    const card = document.createElement('figure');
    card.classList.add('columns__item');
    card.id = `item-${id}`;

    card.innerHTML = `
      <div class="img-container">
                      <img src="${image}" alt="" class="columns__item__img" id="img-${id}">
                      <div class="overlay">
                          <button class="overlay__save btn-red" id="save-btn-${id}">Save</button>
                          <button class="overlay__report">Report</button>
                      </div>
                  </div>
                  <figcaption class="figcaption">
                      <img src="${avatar}" class="figcaption__avatar id="ava-${id}">
                      <p class="figcaption__hashtag" id="hashtag-${id}">#${hashtag}</p>
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
    columns.innerHTML = '';

    searchedCards.forEach(card => {
        showFilteredCards(card, columns)
    })
}

export function saveData(event) {
    const boardId = event.target.id;
    const currentId = event.target.parentElement.parentElement.parentElement.id.split('-').at(-1);
    const currentImg = document.getElementById(`img-${currentId}`).src;
    const currentAva = document.getElementById(`ava-${currentId}`).src;
    const currentHashtag = document.getElementById(`hashtag-${currentId}`).innerText;

    const cardData = {
        id:  currentId,
        img: currentImg,
        ava: currentAva,
        hashtag: currentHashtag
    }

    const data = localStorage.getItem(`${boardId}`);
    debugger
    if (!data) {
        localStorage.setItem(`${boardId}`, JSON.stringify([data]))
    } else {
        const result = JSON.parse(data);
        result.push(cardData);
        localStorage.setItem(`${boardId}`, JSON.stringify(result));
    }
}

export function hideCard() {
    console.log(event.target)
}

