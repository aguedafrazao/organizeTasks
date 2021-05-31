const ButtonDelete = () =>{
    const buttonDel = document.createElement('button')
    buttonDel.classList.add('btn')
    buttonDel.classList.add('btn-light')
    buttonDel.classList.add('button-done')
    buttonDel.innerText = 'Delete'
    buttonDel.addEventListener('click', taskDelete)
    return buttonDel
}
const taskDelete = (e) =>{
    // diz onde o click ocorreu
    const buttonDelete = e.target
    // pegar pai do item
    const taskDone = buttonDelete.parentElement
    taskDone.remove()
    return buttonDelete
}

export default ButtonDelete