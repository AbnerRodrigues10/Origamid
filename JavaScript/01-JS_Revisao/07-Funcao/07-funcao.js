// Crie uma função para verificar se um valor é Truthy
function teste(dados) {
  if (dados === true) {
    console.log("é verdadeiro");
  } else {
    console.log("É falso");
  }
}
// console.log(teste(true));
function IsTruthy(dado) {
  return !!dado;
}
// console.log(IsTruthy("Teste"));

// Crie uma função matemática que retorne o perímetro de um quadrado, lembrando: perímetro é a soma dos quatro lados  quadrado
function lados(lado) {
  console.log(lado * 4);
}
// lados(3);

// Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome
function nome(name, last_name) {
  console.log(`Meu nome é ${name} e o sobrenome é ${last_name}`);
}
// nome("Abner", "Rodrigues");

// Crie uma função que verifica se um número é par
function par(num) {
  if (typeof num !== "number") {
    console.log("não é numero valido");
  } else if (num % 2 !== 0) {
    console.log("É impar");
  } else {
    console.log("É par");
  }
}
// par(5);

// Crie uma função que retorne o tipo de, dado do argumento passado nela (typeof)
function tipo(dado) {
  let tipo = typeof dado;
  console.log(tipo);
}
// tipo(true);

// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("Abner Rodrigues");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}
precisoVisitar(20);
jaVisitei(20);
