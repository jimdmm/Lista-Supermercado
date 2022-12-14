const form = document.getElementById("novoProduto");
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = e.target.elements['produto']
    const quantidade = e.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.produto === produto.value)
    
    const itemAtual = {
        "produto": produto.value,
        "quantidade": quantidade.value
    }

if (existe) {
    itemAtual.id = existe.id

    atualizaElemento(itemAtual)
} else {
    itemAtual.id = itens.length

    criaElemento(itemAtual)

    itens.push(itemAtual)
}

    localStorage.setItem("itens", JSON.stringify(itens))

    produto.value = ""
    quantidade.value = ""
})

function criaElemento(item) {

    const novoProduto = document.createElement('li')
    novoProduto.classList.add("item")

    const numeroProduto = document.createElement('strong')
    numeroProduto.innerHTML = item.quantidade
    numeroProduto.dataset.id = item.id

    novoProduto.appendChild(numeroProduto)
    novoProduto.innerHTML += item.produto

    lista.appendChild(novoProduto)

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}