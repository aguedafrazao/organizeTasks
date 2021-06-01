import { NewTask } from "./createTask.js"

export const showTask = () =>{
    const listData = document.querySelector('[data-list]')

    // mostra os itens do meu local storage
    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || []

    createdTasks.forEach((task)=>{
        listData.appendChild(NewTask(task))
    })
}

