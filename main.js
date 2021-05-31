( ()=>{

    // funcao para criar a tarefa
    const criarTarefa = (evento) => {
        // forca o browser a segurar a informacao
        evento.preventDefault();
        const lista = document.querySelector('[data-list]')
        const inputTarefa = document.querySelector('[data-form-input]');
        const valor = inputTarefa.value;

    // cria o elemento
        const task = document.createElement('li')
        task.classList.add('task')

        // vai pegar o conteudo html que eu quero alterar 
        const conteudo = `<p class="content">${valor}</p>`
        // acessar o conteudo do html 
        task.innerHTML = conteudo
        // criar o botao dentro do li
        task.appendChild(buttonDone())
        task.appendChild(buttonDelete())
        lista.appendChild(task)
        inputTarefa.value = "";
    }

    const newTask = document.querySelector('[data-form-button]')





    
// pega a funcao com oargumento e executa a partir do click

})()
novaTarefa.addEventListener('click', criarTarefa);
