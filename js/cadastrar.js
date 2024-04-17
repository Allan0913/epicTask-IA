document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", () => {

        const form = document.querySelector("form")

        const tarefa = {
            titulo : form.titulo.value,
            descricao: form.descricao.value,
            pontos : form.pontos.value
        }
        
        if(validar(tarefa)){
            console.log(tarefa)
            let tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
            tarefas.push(tarefa)
            localStorage.setItem("tarefas", JSON.stringify(tarefas))

            window.location = "index.html"
        }

})

function validar(tarefa){
    let valid = true
    limparErros()

    if (tarefa.titulo === ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "O título é obrigatório"
        valid = false
    }
    if (tarefa.descricao === ""){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatória"
        valid = false
    }
    if (tarefa.pontos <= 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-error").innerText = "Pontos devem ser maior que zero"
        valid = false
    }

    return valid
}



function limparErros(){
    document
        .querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
        .forEach( campo => campo.classList.remove("is-error"))

    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "")
   
}