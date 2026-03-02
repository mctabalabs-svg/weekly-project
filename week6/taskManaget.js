function createTaskManager() {
  let tasks = [];

  return {
    addTask(task, priority = 'normal') {
      tasks.push({ task, priority });
    },

    addTasks(...items) {
      items.forEach(item => {
        if (typeof item === 'string') {
          tasks.push({ task: item, priority: 'normal' });
        } else if (typeof item === 'object' && item.task) {
          tasks.push(item);
        }
      });
    },

    listTasks() {
      return tasks.map((t, i) => `${i}: ${t.task} [${t.priority}]`).join('\n');
    },

    removeTask(index) {
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
      } else {
        console.log("Invalid index");
      }
    },

    saveTasks(callback) {
      setTimeout(() => {
        callback(tasks);
      }, 1000);
    }
  };
}

const manager = createTaskManager();

manager.addTask("Learn Git", "high");
manager.addTasks("Write README", { task: "Test callbacks", priority: "low" });

console.log(manager.listTasks());

manager.removeTask(0);

manager.saveTasks((saved) => {
  console.log("Tasks saved:", saved);
});
