const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const clearAll = document.querySelector(".clear-all");

// prevents the page from loading
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
console.log(taskList);
// add task btn eventlistener
addTask.addEventListener("click", function (event) {
  event.preventDefault();
  // is task input empty?
  const inputText = taskInput.value.trim();
  if (inputText !== "") {
    emptyMessage.style.display = "none";

    // create a list to put task items
    const task = document.createElement("li");
    console.log(task);
    task.textContent = inputText;

    // add a delete btn into the each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("clear-all");

    // remove the task from list once delete btn is clicked
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(task);
      checkTaskList();
    });

    // task items become child of ul to show dynamically
    taskList.appendChild(task);
    // delete btn becomes the child of task item to show dynamically
    task.appendChild(deleteBtn);
  }
  // clear the input field
  taskInput.value = "";
});

clearAll.addEventListener("click", function () {
  taskList.innerHTML = "";
  taskInput.value = "";
  emptyMessage.textContent = "No task yet. Add a new task above";
  checkTaskList();
});

function checkTaskList() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No task yet. Add a new task above";
  } else {
    emptyMessage.style.display = "none";
  }
}
