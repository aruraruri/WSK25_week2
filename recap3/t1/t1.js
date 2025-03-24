// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: true,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

// add your code here

const todolist = document.querySelector("ul");

for (let elem of todoList) {
  const li = document.createElement("li");
  const taskLabel = document.createElement("Label");
  taskLabel.innerText = elem.task;

  const inputCheckbox = document.createElement("input", "checkbox");

  li.appendChild(taskLabel, inputCheckbox);
  li.insertAdjacentHTML(todolist, "beforeend");
}
