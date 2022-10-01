// Retorne o url da página atual utilizando o objeto window
const pageUrl = document.location.href;
// console.log(pageUrl); // não execute no codeRun direto no Visual Studio code pq não tem endereço

// Seleciona o primeiro elemento da página que possua a classe ativo
const eleAtivo = document.querySelector(".ativo"); // seleciona o primeiro
const eleAtivos = document.querySelectorAll(".ativo"); // seleciona todos

// Retorne a linguagem do navegador
const linguage = window.navigator.language;

// Retorne a largura da janela
const largura = window.innerWidth;
