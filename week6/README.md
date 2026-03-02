
# 📝 Task Manager

A lightweight **task management app** built with **HTML, CSS, and JavaScript**. It allows users to add tasks, view them in a list, and manage priorities. This version includes a **browser-based interface** with input fields and buttons.

---

## 🚀 Features

- **Add a Task**  
  Enter a task in the input field and click **Add Task** to save it.

- **List Tasks**  
  Displays all tasks with their index and priority.

- **Remove Tasks**  
  Tasks can be removed programmatically (via `removeTask(index)` in `taskManager.js`).

- **Save Tasks (Async)**  
  Simulates saving tasks using a callback with `setTimeout`.

- **Web Interface**  
  - Input field for new tasks  
  - Button to add tasks  
  - Task list displayed dynamically in the browser  

---

## 🛠️ Technologies Used

- **HTML5** – Structure and UI elements  
- **CSS3** – (Optional) Styling for better visuals  
- **JavaScript (ES6+)** – Task management logic and DOM manipulation  

---

## 📂 Project Structure

```
project-folder/
│── index.html        # Web interface for the Task Manager
│── taskManager.js    # Contains createTaskManager function and logic
│── style.css         # (Optional) Styling for the app
│── README.md         # Project documentation
```

---

## ⚙️ Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager-web.git
   cd task-manager-web
   ```

2. Open `index.html` in your browser.

3. Add tasks using the input field and **Add Task** button.

4. Tasks will appear in the **Task List** section.

---

## 📌 Example Workflow

- Enter: `Learn Git` → Click **Add Task**  
- Enter: `Write README` → Click **Add Task**  

Output in the browser:

```
0: Learn Git [normal]
1: Write README [normal]
```

---

## 🎯 Future Improvements

- Add **edit task** functionality.  
- Allow **priority selection** via dropdown.  
- Add **delete button** next to each task in the UI.  
- Persist tasks using **localStorage** or a backend database.  
- Improve styling with CSS (dark mode, card layout).  

---

## 📄 License

This project is licensed under the MIT License – feel free to use and modify it.

---
