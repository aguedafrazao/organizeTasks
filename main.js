import {handleNewItem} from './components/createTask.js'
import {showTask} from './components/showTask.js'


const addTask = document.querySelector('[data-form-button]')
addTask.addEventListener('click', handleNewItem)
showTask()
