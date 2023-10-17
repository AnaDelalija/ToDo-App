// Define variables
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
let tasks = [];

// Define functions
function renderTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const label = document.createElement("label");
    label.textContent = task.name;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks.splice(i, 1);
      renderTasks();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  }
}

function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName !== "") {
    tasks.push({ name: taskName, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

// Attach event listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
    event.preventDefault();
  }
});

// Render initial list of tasks
renderTasks();
