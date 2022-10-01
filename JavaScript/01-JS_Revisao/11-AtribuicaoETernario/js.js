// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.

var possuiCarro = true;
var possuiCasa = true;
var darCredito;
var darCredito = possuiCarro && possuiCasa; // uma forma de fazer

// outra forma de fazer
var darCredito =
  possuiCarro && possuiCasa
    ? "Dar credito ao cliente"
    : "Negar Crédito ao cliente";
console.log(darCredito);
