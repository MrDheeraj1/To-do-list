document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addBtn');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  function addTask(text) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }
});
