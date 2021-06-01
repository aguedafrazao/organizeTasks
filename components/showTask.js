import { ordenDates, removeDate } from "../service/date.js"
import { createDate } from "./createDate.js"

export const showTask = () =>{
    const listData = document.querySelector('[data-list]')

    // mostra os itens do meu local storage
    const createdTasks = JSON.parse(localStorage.getItem('tasks')) || []

    listData.innerHTML = " "
    const uniqueDates = removeDate(createdTasks)
    ordenDates(uniqueDates)
    uniqueDates.forEach((day)=>{
        // percorrer o local storage e exibir o valor atraves da data
        listData.appendChild(createDate(day))
    })
}

