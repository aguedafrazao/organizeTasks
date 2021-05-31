import ButtonDone from './components/taskDone.js'
import ButtonDelete from './components/taskDelete.js'

    const newTask = (evento) => {
    evento.preventDefault()
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    const task = document.createElement('li')
    task.classList.add('task')
    
    const conteudo = `<p class="content">${valor}</p>`
    
    task.innerHTML = conteudo

    task.appendChild(ButtonDone())
    task.appendChild(ButtonDelete())
    list.appendChild(task)
    input.value = " "
}

const addTask = document.querySelector('[data-form-button]')
addTask.addEventListener('click', newTask)
