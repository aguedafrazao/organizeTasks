const buttonDone = ()=>{
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-light')
    button.classList.add('button-done')
    button.innerText = 'Done'
    button.addEventListener('click', taskDone)
    return button
}

const taskDone = (e)=>{
    const buttonDone = e.target
    // pegar o pai do botao
    const taskDone = buttonDone.parentElement
    // // toggle devolve um boolean
    taskDone.classList.toggle('done')
}

export default buttonDone