const addTaskButton = document.querySelector("#add-task");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");
const todoForm = document.querySelector("#to-do-form");
const totalTodo = document.querySelector(".total-task");

// localStorage.getItem("tasks") tries to get saved data (tasks) from the browser's local storage.
// Localstorage stores key value pairs as string
// "tasks" is the key where we saved our task list
// JSON.parse(...) it is stored string back into the javascript array json.parse.
// || [] if there is nothing in localstorage it returns null.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load saved tasks
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
});

renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    totalTodo.textContent = `Total Todos ${index}`;
    const li = document.createElement("li");

    const taskContent = document.createElement("div");
    taskContent.classList.add("tasks-tt");

    const checkLabel = document.createElement("label");
    taskContent.appendChild(checkLabel);

    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("id", index);
    checkboxInput.title = "Complete To-do";
    checkboxInput.checked = task.completed;
    checkboxInput.addEventListener("click", (e) => {
      e.stopPropagation();
      //   tasks[index].completed = !tasks[index].completed;
      //   tasks[index].completed = checkboxInput.checked;
      tasks[index].completed = checkboxInput.checked;
      saveTasks();
      renderTasks();
    });

    checkLabel.appendChild(checkboxInput);

    li.appendChild(taskContent);
    const text = document.createElement("span");
    text.classList.add("text-sp");
    text.textContent = task.text;

    taskContent.appendChild(text);
    if (task.completed) {
      li.classList.add("completed");
    }

    // li.addEventListener("click", () => {

    // });

    const buttons = document.createElement("div");
    buttons.classList.add("todo-buttons");
    li.appendChild(buttons);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("title", "Delete To-do");
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation(); // stop triggering the li click
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
    buttons.appendChild(deleteButton);
    const editButton = document.createElement("button");
    editButton.textContent = "✏️";
    editButton.classList.add("edit-button");
    editButton.setAttribute("title", "Edit To-do");
    // editButton.addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });
    editButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent any parent clicks

      // Create input field
      const input = document.createElement("input");
      input.type = "text";
      input.value = task.text;
      input.classList.add("edit-input");

      // Replace span text with input
      taskContent.replaceChild(input, text);
      input.focus();

      // Save on Enter key
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          saveEditedTask();
        }
      });

      // Save on blur (optional)
      input.addEventListener("blur", () => {
        saveEditedTask();
      });

      function saveEditedTask() {
        const newText = input.value.trim();
        if (newText !== "") {
          tasks[index].text = newText;
          saveTasks();
          renderTasks();
        } else {
          // If input is empty, keep original and re-render
          renderTasks();
        }
      }
    });

    buttons.appendChild(editButton);
    taskList.appendChild(li);

    // taskList.app
  });
};

saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

renderTasks();
