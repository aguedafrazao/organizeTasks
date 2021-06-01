const taskDelete = (update, id) =>{
    const index = id
    const createdTasks = JSON.parse(localStorage.getItem('tasks'))
    // splice recebe um ponto inicial e ate onde eu quero remover
    createdTasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(createdTasks))


    update()
}

const ButtonDelete = (update, id) =>{
    const buttonDel = document.createElement('button')
    buttonDel.classList.add('btn')
    buttonDel.classList.add('btn-light')
    buttonDel.classList.add('button-done')
    buttonDel.innerText = 'Delete'
    buttonDel.addEventListener('click',()=> taskDelete(update, id))
    return buttonDel
}


export default ButtonDelete