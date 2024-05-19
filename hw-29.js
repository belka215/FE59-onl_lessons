const ul = document.querySelector('.todos')

function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        response.forEach(item => {
            printTodos({id: item.id, text:item.body})
        })
    })
}

function printTodos({id, text}) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo__item");
    todoItem.id = id;

    todoItem.innerHTML = `
      <div class="todo__wrapper">
          <input type="checkbox" class="todo__completed" id="todo-completed" />
          <div class="todo__text">${text}</div>
          <div class="todo__action">
              <button class="todo__close btn btn_small btn_red" id="todo-delete-${id}" >Х</button>
              <span class="todo__date">01.01.2024</span>
          </div>
      </div>
  `;
  ul.append(todoItem);
}

getTodos();