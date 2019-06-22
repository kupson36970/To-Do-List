//Pobieranie elementów 
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const inputAdd = document.querySelector('[data-key="dodaj"]');
const inputSearch = document.querySelector('[data-key="szukaj"]');
const buttonAdd = document.querySelector('[data-btn="dodaj"]');
const buttonSearch = document.querySelector('[data-btn="szukaj"]');
const liElements = document.getElementsByClassName('task');

const addTask = () => {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `<p>Zadanie o treści: <strong>${inputAdd.value}</strong></p>  <button>X</button> `;
    inputAdd.value = "";

    const todoDate = document.createElement('span');
    todoDate.classList.add('dateInfo');
    const date = new Date();
    const dateText = `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()} o godzinie: ${date.getHours()}:${date.getMinutes()}`
    todoDate.innerText = `Dodano: ${dateText}`;

    task.appendChild(todoDate)
    ul.appendChild(task);

    task.querySelector('button').addEventListener('click', removeTask);
}

inputSearch.addEventListener('input', function () {
    const val = this.value
    const elems = [...liElements]

    elems.forEach(el => {
        const text = el.querySelector('.task p strong').innerText;
        if (text.indexOf(val) !== -1) {
            el.style.setProperty('display', '')
        } else {
            el.style.setProperty('display', 'none')
        }
    })
    taskNumber.textContent = [...liElements].filter(el => el.style.display != 'none').length;
})

const newTask = (e) => {
    e.preventDefault();
    if (inputAdd.value !== "") {
        addTask()
    }
    taskNumber.textContent = [...liElements].filter(el => el.style.display != 'none').length;
}

const removeTask = (e) => {
    e.target.closest('.task').remove();
    taskNumber.textContent = [...liElements].filter(el => el.style.display != 'none').length;
}

form.addEventListener('submit', newTask);