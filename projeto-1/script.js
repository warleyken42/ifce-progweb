const lista = document.getElementById('lista-tarefas')
const tCriadas = document.getElementById('t-criadas')
const tFinalizadas = document.getElementById('t-finalizadas')

function atualizaContFinalizadas() {
    const cks = document.getElementsByTagName('input')
    let count = 0

    for (var c of cks){
        if (c.checked)
            count++
    }

    tFinalizadas.innerText = count

}

function novaTarefa() {
    const tarefa = prompt('Digite a tarefa: ')

    /** Código */
    const ck = document.createElement('input')
    ck.setAttribute('type', 'checkbox')
    ck.onclick = function(){
        atualizaContFinalizadas()
    }
     
    const span = document.createElement('span')
    span.innerText = ' ' + tarefa

    const li = document.createElement('li')

    li.appendChild(ck)
    li.appendChild(span)

    lista.appendChild(li)

    // Tamanho atualizado
    tCriadas.innerText = lista.children.length
}
