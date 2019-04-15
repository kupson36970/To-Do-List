//Pobieranie elementów 
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const inputAdd = document.querySelector('[data-key="dodaj"]');
const inputSearch = document.querySelector('[data-key="szukaj"]');
const buttonAdd = document.querySelector('[data-btn="dodaj"]');
const buttonSearch = document.querySelector('[data-btn="szukaj"]');
const liElements = document.getElementsByClassName('task');
const toDoList = [];


const searchTask = () => {
    const searchText = inputSearch.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
    taskNumber.textContent = liElements.length;
    if (inputSearch.value === "") {
        ul.textContent = "";
        toDoList.forEach((toDoElement, key) => {
            toDoElement.dataset.key = key;
            ul.appendChild(toDoElement);
        })
    }
}


const addTask = (e) => {
    e.preventDefault();
    const task = document.createElement('li');
    if (inputAdd.value == "") return;
    task.classList.add('task');
    task.innerHTML = inputAdd.value + "<button> X</button>";
    toDoList.push(task);
    inputAdd.value = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
    })
    console.log(toDoList);
    ul.appendChild(task);
    taskNumber.textContent = liElements.length;
    inputSearch.addEventListener('input', searchTask);
    task.querySelector('button').addEventListener('click', removeTask);
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
    console.log(toDoList);
    taskNumber.textContent = liElements.length;
}

form.addEventListener('submit', addTask);