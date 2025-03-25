// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const modal = document.querySelector('#modal');
const ul = document.querySelector('ul');

function addNewTodo(newitem) {
  todoList.push(newitem);
  updateTodoListVisual();
  assignEventListeners();
}

function removeTodo(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList.splice(i, 1);
      updateTodoListVisual();
      assignEventListeners();
      break;
    }
  }
}

function changeTodoDone(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (id == todoList[i].id) {
      todoList[i].completed = !todoList[i].completed;
      console.log(todoList);
    }
  }
}

// construct modal
function todoAddModal() {
  modal.innerHTML = '';
  const form = document.createElement('form');

  const modalAddButton = document.createElement('input');

  modalAddButton.type = 'submit';
  modalAddButton.classList.add('modal-add-button');

  const inputText = document.createElement('input');
  inputText.type = 'text';

  form.append(modalAddButton, inputText);
  modal.append(form);

  modalAddButton.addEventListener('click', evt => {
    evt.preventDefault();
    console.log(inputText.value);
    addNewTodo({
      id: todoList.length + 1,
      task: `${inputText.value.trim()}`,
      completed: false,
    });
  });
}

// create li elem
function updateTodoListVisual() {
  // empty out ul list first
  ul.innerHTML = '';
  for (let todo of todoList) {
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `${todo.id}`;
    input.checked = todo.completed ? 'checked' : '';

    const label = document.createElement('label');
    label.htmlFor = `${todo.id}`;
    label.innerText = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.id = `${todo.id}`;
    deleteButton.innerText = 'x';

    li.append(input, label, deleteButton);

    ul.appendChild(li);

    console.log('update todo list visual');
  }
}

// testing list item creation
addNewTodo({
  id: 6,
  task: 'Jihuu',
});

// CLICKABLE ELEMENTS
function assignEventListeners() {
  let checkboxes = document.querySelectorAll(`input[type=checkbox]`);
  let deletebuttons = document.querySelectorAll(`button.delete`);
  let addTodoButton = document.querySelector('button.add-btn');

  console.log(document.querySelectorAll(`input[type=checkbox]`));
  console.log(document.querySelectorAll(`button.delete`));

  // checkbox todo list data modification on clicking checkbox
  for (let box of checkboxes) {
    box.addEventListener('click', () => {
      changeTodoDone(box.id);
    });
  }

  for (let buton of deletebuttons) {
    buton.addEventListener('click', () => {
      console.log(buton.id);
      removeTodo(buton.id);
    });
  }

  addTodoButton.addEventListener('click', () => {
    todoAddModal();
    modal.showModal();
  });
}

// initial assignment of event listeners
assignEventListeners();
