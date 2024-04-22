"use strict";

const action = document.querySelector('.action');
const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('action__delete-all-btn');
deleteAllBtn.classList.add('btn');
deleteAllBtn.textContent = 'Delete All';
action.prepend(deleteAllBtn);


const addBtn = document.querySelector('.action__add-btn');
const ul = document.querySelector('.todo-list');

addBtn.addEventListener("click", () => {
    const enterField = document.querySelector('.action__enter-field');
    const inputText = enterField.value;

    if (inputText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-list__item');
        todoItem.innerHTML = `
        <input type="checkbox" id="chb1" name="chb1" class="checkbox">
        <label for="chb1" class="checkbox-content">
            <p class="checkbox-content__text">${inputText}</p>
            <div class="checkbox-content__right">
                <button class="exit-btn btn">X</button>
                <p class="date">${date}</p>
            </div>
        </label>`

        ul.append(todoItem);

        enterField.value = '';
    }
})


deleteAllBtn.addEventListener('click', () => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
})


function deleteTodo(event) {
    const currentLi = event.target.parentElement.parentElement.parentElement;
    ul.removeChild(currentLi);
}

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('exit-btn')) {
        deleteTodo(event);
    }
});


function checked(event) {
    const currentLi = event.target.parentElement;
    const currentText = event.target.nextElementSibling.firstElementChild;
    currentLi.classList.add('checked');
    currentText.classList.add('text_checked');
}

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
        checked(event);
    }
})


const date = new Date().toISOString().slice(0,10).split('-').reverse().join('.');


const deleteLastBtn = document.querySelector('.action__delete-last-btn')

deleteLastBtn.addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild);
})


