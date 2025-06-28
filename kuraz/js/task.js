let tasks = JSON.parse(localStorage.getItem('tasks')) || [
  { id: 1, title: "Submit project proposal", done: false, priority: "high" },
  { id: 2, title: "Attend team meeting", done: true, priority: "medium" },
  { id: 3, title: "Update website content", done: false, priority: "medium" },
  { id: 4, title: "Organize desk", done: true, priority: "low" },
  { id: 5, title: "Review client feedback", done: false, priority: "high" },
  { id: 6, title: "Complete training module", done: true, priority: "medium" },
  { id: 7, title: "Schedule doctor appointment", done: false, priority: "high" },
  { id: 8, title: "Read industry report", done: false, priority: "low" },
  { id: 9, title: "Prepare presentation slides", done: true, priority: "high" },
  { id: 10, title: "Back up computer files", done: false, priority: "medium" }
];

const taskList = document.getElementById("tasks");
const input = document.getElementById("new-task");
const prioritySelect = document.getElementById("priority");
const addBtn = document.getElementById("add-btn");
const noTaskMsg = document.getElementById("no-tasks");
const filters = document.querySelectorAll(".filter");
const themeToggle = document.getElementById("theme-toggle");
const taskCount = document.getElementById("task-count");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const progressBar = document.getElementById("progress");

let currentFilter = "all";

// Debugging: Log tasks and DOM element
console.log("Initial tasks:", tasks);
console.log("Task list element:", taskList);

function saveTasks() {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (e) {
    console.error("Error saving tasks to LocalStorage:", e);
  }
}

function updateTaskCountAndProgress() {
  try {
    const visibleTasks = tasks.filter(task => {
      if (currentFilter === "all") return true;
      if (currentFilter === "done") return task.done;
      return !task.done;
    });
    taskCount.textContent = `${visibleTasks.length} task${visibleTasks.length === 1 ? '' : 's'}`;
    const completed = tasks.filter(task => task.done).length;
    const progress = tasks.length ? (completed / tasks.length) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  } catch (e) {
    console.error("Error updating task count and progress:", e);
  }
}

function showTasks() {
  try {
    if (!taskList) {
      console.error("Task list element not found!");
      return;
    }
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter(task => {
      if (currentFilter === "all") return true;
      if (currentFilter === "done") return task.done;
      return !task.done;
    });

    noTaskMsg.style.display = filteredTasks.length === 0 ? "block" : "none";
    updateTaskCountAndProgress();

    filteredTasks.forEach(task => {
      const li = document.createElement("li");
      if (task.done) li.classList.add("done");
      li.classList.add(`priority-${task.priority}`);

      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = task.title;
      span.onclick = () => editTask(task, li, span);

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = task.title;

      const actions = document.createElement("div");

      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = task.done ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
      completeBtn.className = "complete-btn";
      completeBtn.onclick = () => {
        task.done = !task.done;
        saveTasks();
        showTasks();
        showSuccessMessage(task.done ? "Task marked as completed!" : "Task marked as pending!");
      };

      const editBtn = document.createElement("button");
      editBtn.innerHTML = '<i class="fas fa-edit"></i>';
      editBtn.className = "edit-btn";
      editBtn.onclick = () => editTask(task, li, span);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        showTasks();
        showSuccessMessage("Task deleted successfully!");
      };

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      li.appendChild(span);
      li.appendChild(editInput);
      li.appendChild(actions);
      taskList.appendChild(li);
    });
  } catch (e) {
    console.error("Error in showTasks:", e);
  }
}

function editTask(task, li, span) {
  try {
    const editInput = li.querySelector(".edit-input");
    span.classList.add("editing");
    editInput.classList.add("active");
    editInput.focus();

    editInput.onblur = () => saveEdit(task, editInput, span);
    editInput.onkeydown = e => {
      if (e.key === "Enter") saveEdit(task, editInput, span);
      if (e.key === "Escape") cancelEdit(editInput, span);
    };
  } catch (e) {
    console.error("Error in editTask:", e);
  }
}

function saveEdit(task, editInput, span) {
  try {
    const newText = editInput.value.trim();
    if (newText) {
      task.title = newText;
      saveTasks();
      showSuccessMessage("Task updated successfully!");
    }
    span.textContent = task.title;
    span.classList.remove("editing");
    editInput.classList.remove("active");
  } catch (e) {
    console.error("Error in saveEdit:", e);
  }
}

function cancelEdit(editInput, span) {
  try {
    span.classList.remove("editing");
    editInput.classList.remove("active");
  } catch (e) {
    console.error("Error in cancelEdit:", e);
  }
}

function showSuccessMessage(message) {
  try {
    successMessage.textContent = message;
    successMessage.classList.add("active");
    setTimeout(() => {
      successMessage.classList.remove("active");
    }, 2000);
  } catch (e) {
    console.error("Error in showSuccessMessage:", e);
  }
}

addBtn.onclick = () => {
  try {
    const text = input.value.trim();
    if (!text) {
      input.classList.add("error");
      errorMessage.classList.add("active");
      setTimeout(() => {
        input.classList.remove("error");
        errorMessage.classList.remove("active");
      }, 2000);
      return;
    }
    tasks.push({
      id: Date.now(),
      title: text,
      done: false,
      priority: prioritySelect.value
    });
    input.value = "";
    saveTasks();
    showTasks();
    showSuccessMessage("Task added successfully!");
  } catch (e) {
    console.error("Error in addBtn.onclick:", e);
  }
};

input.addEventListener("keydown", e => {
  try {
    if (e.key === "Enter") addBtn.click();
  } catch (e) {
    console.error("Error in input keydown:", e);
  }
});

filters.forEach(btn => {
  btn.onclick = () => {
    try {
      filters.forEach(f => f.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      showTasks();
    } catch (e) {
      console.error("Error in filter click:", e);
    }
  };
});

themeToggle.onclick = () => {
  try {
    document.body.classList.toggle("dark");
    themeToggle.innerHTML = document.body.classList.contains("dark")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  } catch (e) {
    console.error("Error in themeToggle click:", e);
  }
};

// Initialize tasks
showTasks();