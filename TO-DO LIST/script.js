// Function to create and add a task
function createTask(text) {
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = text;
    span.onclick = () => {
      li.classList.toggle("completed");
      li.classList.remove("canceled");
    };
  
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";
  
    // ❌ Cancel Button
    const cancelBtn = document.createElement("i");
    cancelBtn.className = "fas fa-ban"; // 🚫 Cancel icon
    cancelBtn.title = "Cancel Task";
    cancelBtn.onclick = (e) => {
      e.stopPropagation();
      li.classList.toggle("canceled");
      li.classList.remove("completed");
    };
  
    // 🗑️ Delete Button
    const deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash"; // 🗑️ Trash icon
    deleteBtn.title = "Delete Task";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
    };
  
    actionsDiv.appendChild(cancelBtn);
    actionsDiv.appendChild(deleteBtn);
  
    li.appendChild(span);
    li.appendChild(actionsDiv);
    taskList.appendChild(li);
  }
  
  // Add Task Button
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    createTask(taskText);
    taskInput.value = "";
  }
  
  // 🌙 Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkModeBtn");
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkModeBtn.textContent = document.body.classList.contains("dark")
      ? "☀️ Toggle Light Mode"
      : "🌙 Toggle Dark Mode";
  });
  