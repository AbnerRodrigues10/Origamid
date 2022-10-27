//OUTERHTML, INNERHTML E INNERTEXT

const menu = document.querySelector(".menu");

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = "<p>Texto</p>"; // a tag vai como texto
menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

//TRASVERSING
const listaa = document.querySelector(".animais-lista");

listaa.parentElement; // pai
listaa.parentElement.parentElement; // pai do pai
listaa.previousElementSibling; // elemento acima
listaa.nextElementSibling; // elemento abaixo

listaa.children; // HTMLCollection com os filhos
listaa.children[0]; // primeiro filho
listaa.children[--lista.children.length]; // último filho

listaa.querySelectorAll("li"); // todas as LI's
listaa.querySelector("li:last-child"); // último filho

//ELEMENT VS NODE
const listas = document.querySelector(".animais-lista");

listas.previousElementSibling; // elemento acima
listas.previousSibling; // node acima

listas.firstChild; // primeiro node child
listas.childNodes; // todos os node child
