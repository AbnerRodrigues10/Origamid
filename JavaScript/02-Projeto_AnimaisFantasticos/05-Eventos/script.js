// const img = document.querySelector("img");

// function callback() {
//   console.log("clicou");
// }

// // img.addEventListener("click", callback);

// const animaisLista = document.querySelector(".animais-lista");

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
// }

// // animaisLista.addEventListener("click", callbackLista);

// // console.log(animaisLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   // console.log(event);
//   // console.log(this); é a mesma coisa de console.log(event.currentTarget);
// }

// // linkExterno.addEventListener("click", handleLinkExterno);

// const h1 = document.querySelector("h1");

// function handlerEvent(event) {
//   console.log(event.type, event);
// }

// h1.addEventListener("click", handlerEvent);
// h1.addEventListener("mouseenter", handlerEvent);
// h1.addEventListener("mousemove", handlerEvent);
// window.addEventListener("scroll", handlerEvent);
// window.addEventListener("resize", handlerEvent);

// function handleKeyboard(event) {
//   if (event.key === "f") {
//     document.body.classList.toggle("fullscreen");
//   }
//   // console.log(event.key);
// }

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target);
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
