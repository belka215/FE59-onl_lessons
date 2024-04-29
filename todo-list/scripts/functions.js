export function getData() {
    const data = localStorage.getItem('todos');
    return JSON.parse(data);
}

export function setData(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function getDataFromLS(todoList) {
    if (todoList) {
        todoList.forEach(item => {
            const isChecked = item.isChecked;

            createTodo(item);

            if (isChecked) {
                todoItem.classList.add('checked');
                const todoText = todoItem.lastElementChild.firstElementChild;
                todoText.classList.add('text_checked');
            }
        });
    }
}

export function setTodoToLS({ id, date, text, isChecked }, uId) {
    const todo = {
        id,
        text,
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
}

export function createTodo({ id, date, text, isChecked }, uId) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-list__item');
    todoItem.id = id;

    todoItem.innerHTML = `
        <input type="checkbox" id="checkbox-${uId}" name="chb1" class="checkbox" ${isChecked ? "checked" : ""}>
        <label for="chb1" class="checkbox-content">
            <p class="checkbox-content__text" id="text-${uId}">${text}</p>
            <div class="checkbox-content__right">
                <button class="exit-btn btn" id="exit-btn-${uId}">X</button>
                <p class="date">${date}</p>
            </div>
        </label>`;

    ul.append(todoItem);

    ++todoCount;

    allTodo.textContent = todoCount;
}

export function deleteTodo(event) {
    console.log(event.target)
    const id = event.target.id;
    console.log(id);
    const liId = `todo-item-${id.split('-').at(-1)}`;
    console.log(liId);
    const currentLi = ul.querySelector(`#${liId}`);
    console.log(currentLi)


    const todos = getData();
    console.log(todos);
    const filteredTodos = todos.filter((item) => item.id !== liId);
    setData(filteredTodos);
    console.log(filteredTodos);

    ul.removeChild(currentLi);

    --todoCount;
    allTodo.textContent = todoCount;
}

export function checked(event) {
    const id = event.target.id;
    const liId = `todo-item-${id.split('-').at(-1)}`;
    const textId = `text-${id.split('-').at(-1)}`;
    const currentLi = ul.querySelector(`#${liId}`);
    const currentText = ul.querySelector(`#${textId}`);

    currentLi.classList.toggle('checked');
    currentText.classList.toggle('text_checked');
}

export function lsChecked(event) {
    const id = event.target.id;
    const chId = `checkbox-${id.split('-').at(-1)}`;
    const checkbox = ul.querySelector(`#${chId}`);
    if (checkbox.checked) {
        const todos = getData();
        const currentTodo = todos[todos.findIndex(todo => todo.id == `todo-item-${id.split('-').at(-1)}`)];
        currentTodo.isChecked = true;
        setData(todos);
        complTodosCount();
    } else {
        const todos = getData();
        const currentTodo = todos[todos.findIndex(todo => todo.id == `todo-item-${id.split('-').at(-1)}`)];
        currentTodo.isChecked = false;
        setData(todos);
        complTodosCount();
    }
}

export function search(event) {
    const searchedText = event.target.value;

    const todos = getData();

    const searchedTodos = todos.filter(todo => {
        return todo.text.includes(searchedText);
    })

    ul.innerHTML = '';

    searchedTodos.forEach(item => {
        createTodo(item)
    })
}

function complTodosCount() {
    const complTodo = document.querySelector('.search__compl__value');
    const data = getData();
    const complTodos = data.filter(todo => {
        return todo.isChecked == true
    })
    const complCount = complTodos.length;

    complTodo.textContent = complCount;
}

export function showComplTodo() {
    const data = getData();
    const filterdTodos = data.filter((item) => item.isChecked);

    ul.innerHTML = "";

    filterdTodos.forEach((item) => {
        createTodo(item, null, ul);
    });
}