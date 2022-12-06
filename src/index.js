document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", handleTodo);
});
const form = document.getElementById("create-task-form");

function handleTodo(e) {
  e.preventDefault();

let newTask = e.target[0].value;

let todo = document.getElementById("tasks");
let li = document.createElement("li");
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete;";
deleteBtn.classList.add("delete-btn");
li.textContent = newTask;
li.append(deleteBtn);

todo.appendChild(li);

deleteBtn.addEventListener("click",(e)=>{
deleteBtn.parentNode.remove()

})

}
