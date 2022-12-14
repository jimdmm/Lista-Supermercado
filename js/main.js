const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }


}

