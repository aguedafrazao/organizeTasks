import {handleNewItem} from './components/createTask.js'

const addTask = document.querySelector('[data-form-button]')
addTask.addEventListener('click', handleNewItem)
