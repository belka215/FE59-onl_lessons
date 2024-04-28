"use strict";

const action = document.querySelector('.action');
const deleteAllBtn = document.createElement('button');
deleteAllBtn.classList.add('action__delete-all-btn');
deleteAllBtn.classList.add('btn');
deleteAllBtn.textContent = 'Delete All';
action.prepend(deleteAllBtn);


const addBtn = document.querySelector('.action__add-btn');
const enterField = document.querySelector('.action__enter-field');
const ul = document.querySelector('.todo-list');
const deleteLastBtn = document.querySelector('.action__delete-last-btn');

const date = new Date().toISOString().slice(0,10).split('-').reverse().join('.');

const todoList = getData();
let uId;

if (todoList) {
    uId = todoList.length + 1;
} else {
    uId = 1;
}

function getData() {
    const data = localStorage.getItem('todos');
    return JSON.parse(data);
}

function setData(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

addBtn.addEventListener("click", () => {
    const inputText = enterField.value;

    if (inputText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-list__item');
        todoItem.id = `todo-item-${uId}`;

        todoItem.innerHTML = `
        <input type="checkbox" id="checkbox-${uId}" name="chb1" class="checkbox">
        <label for="chb1" class="checkbox-content">
            <p class="checkbox-content__text" id="text-${uId}">${inputText}</p>
            <div class="checkbox-content__right">
                <button class="exit-btn btn" id="exit-btn-${uId}">X</button>
                <p class="date">${date}</p>
            </div>
        </label>`

        const todo = {
            id: `todo-item-${uId}`,
            text: inputText,
            date,
            isChecked: false,
        }

        const data = localStorage.getItem('todos');
        if (!data) {
            localStorage.setItem('todos', JSON.stringify([todo]));
        } else {
            const result = JSON.parse(data);
            result.push(todo);
            localStorage.setItem('todos', JSON.stringify(result));
        }

        ul.append(todoItem);

        ++uId;

        enterField.value = '';
    }
})

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('exit-btn')) {
        deleteTodo(event);
    }
    if (event.target.classList.contains('checkbox')) {
        checked(event);
        lsChecked(event);
    }
});

deleteAllBtn.addEventListener('click', () => {
    ul.innerHTML = '';

    localStorage.clear();
})

deleteLastBtn.addEventListener('click', () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);

        const todos = getData();
        todos.pop();
        setData(todos);
    }
})

function deleteTodo(event) {
    const id = event.target.id;
    console.log(id);
    const liId = `todo-item-${id.split('-').at(-1)}`;
    console.log(liId);
    const currentLi = ul.querySelector(`#${liId}`);
    console.log(currentLi)
    ul.removeChild(currentLi);

    const todos = getData();
    console.log(todos);
    console.log(todos.findIndex(todo => todo.id == liId));
    todos.splice(todos.findIndex(todo => todo.id == liId), 1)
    setData(todos);
    console.log(todos)
}

function checked(event) {
    const id = event.target.id;
    const liId = `todo-item-${id.split('-').at(-1)}`;
    const textId = `text-${id.split('-').at(-1)}`;
    const currentLi = ul.querySelector(`#${liId}`);
    const currentText = ul.querySelector(`#${textId}`);

    currentLi.classList.toggle('checked');
    currentText.classList.toggle('text_checked');
}

function lsChecked() {
    const id = event.target.id;
    const chId = `checkbox-${id.split('-').at(-1)}`;
    const checkbox = ul.querySelector(`#${chId}`);
    if (checkbox.checked) {
        const todos = getData();
        const currentTodo = todos[todos.findIndex(todo => todo.id == `todo-item-${id.split('-').at(-1)}`)];
        currentTodo.isChecked = true;
        setData(todos);
    } else {
        const todos = getData();
        const currentTodo = todos[todos.findIndex(todo => todo.id == `todo-item-${id.split('-').at(-1)}`)];
        currentTodo.isChecked = false;
        setData(todos);
    }
}

if (todoList) {
    todoList.forEach(item => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-list__item');
        todoItem.id = item.id;
        const date = item.date;
        const isChecked = item.isChecked;

        todoItem.innerHTML = `
        <input type="checkbox" id="checkbox-${uId}" name="chb1" class="checkbox" ${isChecked ? "checked" : ""}>
        <label for="chb1" class="checkbox-content">
            <p class="checkbox-content__text" id="text-${uId}">${item.text}</p>
            <div class="checkbox-content__right">
                <button class="exit-btn btn" id="exit-btn-${uId}">X</button>
                <p class="date">${date}</p>
            </div>
        </label>`;

        if(isChecked) {
            todoItem.classList.add('checked');
            const todoText = todoItem.lastElementChild.firstElementChild;
            todoText.classList.add('text_checked');
        }

        ul.append(todoItem);
    });
}




