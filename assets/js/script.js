var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// function to create new list task item
var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);
}

// event listener on "add task" button to add task when clicked
buttonEl.addEventListener("click", createTaskHandler);
