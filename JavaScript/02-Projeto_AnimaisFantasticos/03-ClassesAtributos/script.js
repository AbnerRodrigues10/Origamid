// const img = document.querySelector("asdas");

// img.getAttribute("src"); // valor do src
// img.setAttribute("alt", "Texto Alternativo"); // muda o alt
// img.hasAttribute("id"); // true / false
// img.removeAttribute("alt"); // remove o alt

// img.hasAttributes(); // true / false se tem algum atributo

// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const altVerificando = document.querySelectorAll("img");
console.log(altVerificando);

altVerificando.forEach((item) => {
  const possuiaTributo = item.hasAttribute("alt");
  console.log(possuiaTributo);
});

// Modifique o href do link externo no menu
const links = document.querySelector('a[href^="http"]');
links.setAttribute("href", "http://www.google.com.br");
console.log(links);
