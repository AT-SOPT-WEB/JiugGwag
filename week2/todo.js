const addButton = document.getElementById("addButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("ul");

addButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    const listItem = document.createElement("li");
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = "";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todoText) => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
  });
});
