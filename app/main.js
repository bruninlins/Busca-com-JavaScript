let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endPointDaAPI); /*Fetch busca os dados do arquivo*/
  livros = await res.json(); /*O await pausa o código até a promessa (Promise) ser resolvida. Ou seja, espera a resposta antes de continuar. */
  let livrosComDescontos = aplicarDesconto(livros)
  exibirOsLivrosDaTela(livrosComDescontos);
}



