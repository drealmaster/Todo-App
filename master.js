const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');





form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});


function addTodo() {

    let todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li");

        todoEl.innerHTML = todoText;

        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-sm float-end delete';

        let font = document.createElement('i')
        font.className = 'fas fa-trash fa-2x';

        deleteBtn.appendChild(font)

        todoEl.appendChild(deleteBtn)


        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
        });

        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            todoEl.remove()
        });

        todosUL.appendChild(todoEl);

        input.value = '';

        
    }
};

