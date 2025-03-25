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

const ul = document.querySelector('ul');

todoList.forEach(todo => {
  const li = document.createElement('li');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo${todo.id}`;
  input.checked = todo.completed ? 'checked' : '';

  const label = document.createElement('label');
  label.htmlFor = `todo${todo.id}`;
  label.innerText = todo.task;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';

  li.append(input, label, deleteButton);

  ul.appendChild(li);
});

function getListItems() {
  return ul.getElementsByTagName('li');
}

for (let i = 0; i < getListItems().length; i++) {
  try {
    getListItems()
      [i].getElementsByTagName('input')[0]
      .addEventListener('click', function () {
        todoList[i].completed = !todoList[i].completed;
        console.log(todoList);
      });
  } catch (error) {
    console.warn(error);
  }

  try {
    getListItems()
      [i].getElementsByTagName('button')[0]
      .addEventListener('click', function () {
        console.log('AA');
        todoList = todoList.splice(i, 1);
        getListItems()[i].remove();
      });
  } catch (error) {
    console.warn(error);
  }
}
