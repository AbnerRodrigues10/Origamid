true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true
// Se tiver falso sempre ira retornar o primeiro valor falso
// Se tiver verdadeiro sempre ira retornar o ultimo verdadeiro

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// retornar o primeiro verdadeiro

// ===== Exercicio =====

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var abner = 25;
var jose = 22;
if (abner > jose) {
  console.log("Abner é mais velho");
} else {
  console.log("Jose é mais velho");
} // o erro foi esquecer de comparar se era igual

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
// numero - espaço é = numero ou seja verdadeiro e continua a expressão, porem vai pegar o ultimo numero verdadeiro e por ele no valor da expressão, se tivesse algum caracter no lugar de espaço daria NaN porque é um valor falso

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // True
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // undefined, any, não definida, sem valor atribuido = false
var dinheiroNaConta = 0; // false

console.log(!!nome); // para verificar se o valor é falso ou verdadeiro basta usar !!

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("A china é maior");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// // O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão" && "Pegadinha"); // sempre ira exibir o ultimo valor verdadeiro!
} else {
  console.log("Falso");
}
