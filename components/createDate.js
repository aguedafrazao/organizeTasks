import {NewTask} from './createTask.js'
"use strict"
export const createDate = (date) =>{
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const dateTop = document.createElement('li')
    const content = `<p class="content">${date.format('DD/MM/YYYY')}<p>`

    dateTop.innerHTML = content
    tasks.forEach((task=>{
        const day = moment(task.dateFormat, 'DD/MM/YYYY')
        const diff = date.diff(day)
        if(diff==0){
            dateTop.appendChild(NewTask(task))
        }
    }))
    return dateTop
}