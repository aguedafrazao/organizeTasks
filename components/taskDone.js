const taskDone = (update, id)=>{
    const createdTask = JSON.parse(localStorage.getItem('tasks'))
    // '!' muda o estado 
    createdTask[id].done = !createdTask[id].done
    localStorage.setItem('tasks', JSON.stringify(createdTask))

    update()
}

const ButtonDone = (update, id)=>{
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-light')
    button.classList.add('button-done')
    button.innerText = 'Done'
    button.addEventListener('click', ()=>taskDone(update, id))
    return button
}


export default ButtonDone