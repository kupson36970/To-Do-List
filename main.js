//Pobieranie elementów 
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');
const listBox = document.querySelector('div');
const inputAdd = document.querySelector('[data-key="dodaj"]');
const inputSearch = document.querySelector('[data-key="szukaj"]');
const buttonAdd = document.querySelector('[data-btn="dodaj"]');
const buttonSearch = document.querySelector('[data-btn="szukaj"]');
const liElements = document.getElementsByClassName('task');

const addTask = () => {
    const task = document.createElement('div');
    task.classList.add('task');


    const todoDate = document.createElement('span');
    todoDate.classList.add('dateInfo');
    const time = new Date();
    const day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    const month = time.getMonth() < 10 ? "0" + time.getMonth() * 1 + 1 : time.getMonth() * 1 + 1;
    const year = time.getFullYear()
    const hours = time.getHours();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const dateText = `${day}-${month}-${year} o godzinie: ${hours}:${minutes}`

    const btnDel = document.createElement('button');
    btnDel.classList.add('btnDel');


    task.innerHTML = `<p>Zadanie o treści: <strong>${inputAdd.value}</strong></p> `;
    btnDel.innerHTML = 'X';
    todoDate.innerText = ` - Dodano: ${dateText}`;


    listBox.appendChild(task);
    task.appendChild(todoDate)
    task.appendChild(btnDel)

    task.querySelector('.btnDel').addEventListener('click', removeTask);
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
        inputAdd.value = "";
    }
    taskNumber.textContent = [...liElements].filter(el => el.style.display != 'none').length;
}

const removeTask = (e) => {
    e.target.closest('.task').remove();
    taskNumber.textContent = [...liElements].filter(el => el.style.display != 'none').length;
}

form.addEventListener('submit', newTask);