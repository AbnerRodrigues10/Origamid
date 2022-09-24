// Ordem: Parênteses, Expoentes, Multiplicação e Divisão (se tiver mais de um da esquerda para a direita).
// Adição e Subtração (se tiver mais de um  da esquerda para a direita).
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// incremento e decremento
// var total = 1;
// console.log(total);
// console.log(total++);
// console.log(total);
// console.log(++total);
// console.log(total);

// var total = 1;
// console.log(total);
// console.log(total--);
// console.log(total);
// console.log(--total);
// console.log(total);

// Converte string em numero, só valido para numero sem letrar juntos, se trocar por - o numero fica negativo
// var num = "1";
// var num1 = +"2";
// console.log(+num);
// console.log(num1);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
// 5 * 2 = 10 | 10 / 2 = 5 | 5 + 20 + 10 = 35

// console.log(total);

// Crie duas expressões que retornem NaN
var palavra = "Abner" / 2;
// console.log(palavra);

// Somar a string '200' com o número 50 e retornar 250
var palavra = "200";
var num = 50;
var total = +palavra + num;
// console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado
var num = 5;
// console.log(++num);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = +numero / 2; // NaN (Not a Number)
console.log(pesoPorDois);

// Ou
var numero = +"80" / 2;

console.log(numero);
