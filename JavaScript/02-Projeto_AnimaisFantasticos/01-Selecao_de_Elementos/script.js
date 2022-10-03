// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName("img"); //por html estatico
const imagensS = document.querySelectorAll("img"); // por node, dinamico ao vivo

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAll = document.querySelectorAll('[src^="img/imagem"]');
const imgAllP = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imgAll);
console.log(imgAllP);

// Selecione todos os links internos (onde o href começa com #)

const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const fistH2 = document.querySelector(".animais-descricao");
const h2fist = fistH2.querySelector("h2");

console.log(fistH2);
console.log(h2fist);

// Selecione o último p do site
const bodyP = document.querySelectorAll("p");
console.log(bodyP[--bodyP.length]);
