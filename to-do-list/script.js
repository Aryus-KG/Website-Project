const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo");

let todoData = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodoData();
});

function addTodoData() {
  const todoContent = todoInput.value.trim();
  if (todoContent.length > 0) {
    todoData.push(todoContent);
    updateTodo();
    todoInput.value = "";
  }
}

function updateTodo() {
  todoListUL.innerHTML = "";
  todoData.forEach((todo, todoIndex) => {
    todoItem = displayTheTodo(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

function displayTheTodo(todo, todoIndex) {
  const todoID = "todo-" + todoIndex;
  const todoLi = document.createElement("li");
  todoLi.className = "todo-list";
  todoLi.innerHTML = `
  <input type="checkbox" name="checklist" id="${todoID}" />
          <label for="${todoID}" class="custom-checkbox"
            ><span class="material-symbols-outlined"> check </span></label
          >
          <label for="${todoID}" class="todo-text">${todo}</label>
          <button type="button" class="delete-btn">
            <span class="material-symbols-outlined"> delete </span>
          </button>
  `;
  return todoLi;
}
