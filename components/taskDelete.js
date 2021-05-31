import buttonDone from "./taskDone"

const buttonDelete = ()=>{
    const buttonDelete = document.createElement('button')
    button.innerText = 'Delete'
    button.addEventListener('click', ()=>{
        console.log('deletado')
    })
    return buttonDelete
}

const taskDelete = (e)=>{
    const deleteButton = e.target
    const taskDelete = deleteButton.parentElement
    taskDelete.remove()
    return deleteButton
}

export default buttonDelete