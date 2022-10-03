// Mostre no console cada parágrado do site
const conteudoP = document.querySelectorAll("p");
console.log(conteudoP);

// Mostre o texto dos parágrafos no console
conteudoP.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach((i) => {
  console.log(i++);
});

imgs.forEach(() => i++);
