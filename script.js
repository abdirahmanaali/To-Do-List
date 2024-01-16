const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
const clearAll = document.getElementById("clear-all");

// prevents the page from loading
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

// add task btn eventlistener
addTask.addEventListener("click", function () {
  // is task input empty?
  const inputText = taskInput.value.trim();
  console.log(inputText);
  if (inputText !== "") {
    // create a list to put task items
    const task = document.createElement("li");
    console.log(task);
    task.textContent = inputText;

    // add a delete btn into the each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // remove the task from list once delete btn is clicked
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(task);
      checkTaskList;
    });

    // task items become child of ul to show dynamically
    taskList.appendChild(task);
    // delete btn becomes the child of task item to show dynamically
    task.appendChild(deleteBtn);
  }
  // clear the input field
  taskInput.value = "";
  emptyMessage.style.display = "none";
});

clearAll.addEventListener("click", function () {
  taskList.innerHTML = "";
  taskInput.value = "";
  emptyMessage.style.display = "none";
  checkTaskList;
});

function checkTaskList() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}
