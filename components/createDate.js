import {NewTask} from './createTask.js'
"use strict"
export const createDate = (date) =>{
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const dateTop = document.createElement('li')
    const dateMoment = moment(date, 'DD/MM/YYYY')
    const content = `<p class="content">${dateMoment.format('DD/MM/YYYY')}<p>`

    dateTop.innerHTML = content
    tasks.forEach(((task, id)=>{
        const day = moment(task.dateFormat, 'DD/MM/YYYY')
        const diff = dateMoment.diff(day)
        if(diff==0){
            dateTop.appendChild(NewTask(task, id))
        }
    }))
    return dateTop
}