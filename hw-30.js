const ul = document.querySelector('.todos')

// function loadPost(num) {
//     return new Promise((resolve) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
//             .then(response => response.json())
//             .then(response => {
//                 const toDo = document.createElement('li');
//                 toDo.classList.add("todo__item");

//                 toDo.innerHTML = `
//                 <div class="todo__wrapper">
//                     <input type="checkbox" class="todo__completed" id="todo-completed-${response.id}" />
//                     <div class="todo__text">${response.title}</div>
//                     <div class="todo__text">${response.body}</div>
//                 </div>
//             `;
//                 ul.append(toDo)
//             })
//         resolve()
//     })
// }

// loadPost(15)
//     .then(() => loadPost(23))
//     .then(() => loadPost(7))
//     .then(() => loadPost(3))
//     .catch((err) => {
//         console.log(`ERROR: ${err}`)
//     })



async function loadPost(num) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
    const data = await response.json();
    const toDo = document.createElement('li');
    toDo.classList.add("todo__item");

    toDo.innerHTML = `
                <div class="todo__wrapper">
                    <input type="checkbox" class="todo__completed" id="todo-completed-${data.id}" />
                    <div class="todo__text">${data.title}</div>
                    <div class="todo__text">${data.body}</div>
                </div>
            `;
    ul.append(toDo)
}

loadPost(15);
loadPost(23);
loadPost(7);
loadPost(3);




