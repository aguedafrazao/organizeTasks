import ButtonDone from './components/taskDone.js'
import ButtonDelete from './components/taskDelete.js'

const handleNewItem = (evento) => {
    evento.preventDefault()
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)

    const dateFormat = date.format('DD/MM/YYYY')
    const data = {
        valor, dateFormat
    }
    const createTask = newTask(data)
    list.appendChild(createTask)
    input.value = " "

}


const newTask = ({ valor, dateFormat }) => {
    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content">${dateFormat} * ${valor} </p>`

    task.innerHTML = conteudo

    task.appendChild(ButtonDone())
    task.appendChild(ButtonDelete())
    return task
}

const addTask = document.querySelector('[data-form-button]')
addTask.addEventListener('click', handleNewItem)
