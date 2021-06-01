import ButtonDone from './taskDone.js'
import ButtonDelete from './taskDelete.js'
import { showTask } from './showTask.js'


export const handleNewItem = (evento) => {
    evento.preventDefault()
    // inicializando a lista vazia, o parde vai transformar a string em objeto e pegar o item
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []

    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendar = document.querySelector('[data-form-date]')
    // moment é uma library do js para pegar a data
    const date = moment(calendar.value)
    const time = date.format('HH:mm')
    const dateFormat = date.format('DD/MM/YYYY')
    const done = false

    const data = {
        valor, 
        dateFormat, 
        time, 
        done
    }

    // aqui eu criei uma lista e nela eu passo os valores a serem preenchidos.  '...' pega tudo que tem dentro da tarefa
    const updateTasks = [...tasks, data]
    // armazenar os dados temporariamente e transforma o objeto em string
    localStorage.setItem("tasks", JSON.stringify(updateTasks))
    // limpa o valor do input
    input.value = " "

    // 
    showTask()

}


export const NewTask = ({ valor, time, done }, id) => {
    const task = document.createElement('li')
    const content = `<p class="content">${time} * ${valor} </p>`
    if(done){
        task.classList.add('done')
    }
    task.classList.add('task')

    task.innerHTML = content

    task.appendChild(ButtonDone(showTask, id))
    task.appendChild(ButtonDelete(showTask, id))
    return task
}
