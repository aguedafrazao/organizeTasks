import { createDate } from "./createDate.js"

export const showTask = () =>{
    const listData = document.querySelector('[data-list]')

    // mostra os itens do meu local storage
    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || []

    listData.innerHTML = " "
    createdTasks.forEach((task)=>{
        // percorrer o local storage e exibir o valor atraves da data
        const day = moment(task.dateFormat, 'DD/MM/YYYY')
        listData.appendChild(createDate(day))
    })
}

