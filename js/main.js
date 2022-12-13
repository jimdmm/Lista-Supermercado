const form = document.getElementById("novoItem");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)
}