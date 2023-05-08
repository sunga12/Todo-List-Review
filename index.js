import Tasks from './taskFunctions.js';
import './style.css';

const typeTask = document.getElementById('add-to-list');

const todoList = new Tasks();

window.addEventListener('load', () => {
  todoList.retrieveTasks();
});

document.addEventListener('click', (event) => {
  if (event.target === enterIcon && typeTask.value !== '') {
    todoList.addTask(typeTask.value, false);
  }
  typeTask.value = '';
  
  const deleteIcons = document.querySelectorAll('.menu');

  deleteIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      todoList.removeTask(index);
    });
  });

  if (event.target.matches('.clear-all')) {
    todoList.clearCompleted();
  }
});

document.addEventListener('click', (event) => {

});

document.addEventListener('change', (event) => {
  const taskDescriptions = document.querySelectorAll('.task-desc');
  const checkBoxes = document.querySelectorAll('.check-box');

  if (event.target.matches('.task-desc')) {
    taskDescriptions.forEach((description, index) => {
      if (event.target === description) {
        todoList.editTask(description, index);
      }
    });
  }

  if (event.target.matches('.check-box')) {
    checkBoxes.forEach((status, index) => {
      if (event.target === status) {
        todoList.changeStatus(index, status.checked);
      }
    });
  }
});
