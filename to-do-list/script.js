const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo");

let todoData = loadTodo();
updateTodo();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodoData();
});

function addTodoData() {
  const todoContent = todoInput.value.trim();
  if (todoContent.length > 0) {
    const todoObject = {
      text: todoContent,
      completed: false,
    };
    todoData.push(todoObject);
    updateTodo();
    saveTodo();
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
  const todoText = todo.text;
  todoLi.className = "todo-list";
  todoLi.innerHTML = `
  <input type="checkbox" name="checklist" id="${todoID}" />
          <label for="${todoID}" class="custom-checkbox"
            ><span class="material-symbols-outlined"> check </span></label
          >
          <label for="${todoID}" class="todo-text">${todoText}</label>
          <button type="button" class="delete-btn">
            <span class="material-symbols-outlined"> delete </span>
          </button>
  `;

  const deleteBtn = todoLi.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    deleteTodo(todoIndex);
  });

  const checkbox = todoLi.querySelector("input");
  checkbox.addEventListener("change", () => {
    todoData[todoIndex].completed = checkbox.checked;
    saveTodo();
  });

  checkbox.checked = todo.completed;

  return todoLi;
}

function deleteTodo(index) {
  todoData = todoData.filter((_, i) => i !== index);
  saveTodo();
  updateTodo();
}

function saveTodo() {
  const todoJSON = JSON.stringify(todoData);
  localStorage.setItem("todo", todoJSON);
}

function loadTodo() {
  const savedTodo = localStorage.getItem("todo") || "[]";

  return JSON.parse(savedTodo);
}
