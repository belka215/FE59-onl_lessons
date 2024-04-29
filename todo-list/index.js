import {
    getData,
    setData,
    getDataFromLS,
    setTodoToLS,
    createTodo,
    deleteTodo,
    checked,
    lsChecked,
    search,
    showComplTodo,
} from "./scripts/functions.js";


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
const searchField = document.querySelector('.search__search-field');
const allTodo = document.querySelector('.search__all__value');
const showComplBtn = document.querySelector('.search__show-compl-btn');
const showAllBtn = document.querySelector('.search__show-all-btn');
const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

const todoList = getData();

let uId;
let todoCount = 0;

if (todoList) {
    const lastLiinLS = todoList[todoList.length - 1];
    const id = Number(lastLiinLS.id.split('-').at(-1));
    uId = id + 1;
} else {
    uId = 1;
}

getDataFromLS(todoList, ul);

addBtn.addEventListener("click", () => {
    const text = enterField.value;
    const id = `todo-item-${uId}`;

    if (text) {
        createTodo({ id, date, text, isChecked: false }, uId, ul, allTodo, todoCount);
        setTodoToLS({ id, date, text, isChecked: false }, uId, ul);

        ++uId;

        enterField.value = '';
    }
})

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('exit-btn')) {
        deleteTodo(event, ul, allTodo, todoCount, allTodo);
    }
    if (event.target.classList.contains('checkbox')) {
        checked(event, ul, allTodo, todoCount);
        lsChecked(event, ul, allTodo, todoCount);
    }
});

deleteAllBtn.addEventListener('click', () => {
    ul.innerHTML = '';

    localStorage.clear();

    allTodo.textContent = 0;
})

deleteLastBtn.addEventListener('click', () => {
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);

        const todos = getData();
        todos.pop();
        setData(todos);

        --todoCount;
        allTodo.textContent = todoCount;
    }
})

searchField.addEventListener('input', (event) => {
    search(event, ul);
})

showAllBtn.addEventListener('click', () => {
    searchField.value = '';
    ul.innerHTML = "";
    const data = getData()
    getDataFromLS(data, ul);
})

showComplBtn.addEventListener('click', () => {
    showComplTodo(ul)
})




