let btnOrdernarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdernarPorPreco.addEventListener("click", ordenarLivrosPorPrecos);

function ordenarLivrosPorPrecos(){
  let = livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosDaTela(livrosOrdenados);
}