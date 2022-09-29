// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
// console.log(var, marca, portas);
// pq var deveria ser cor, e const e let não podem ser acessadas fora do escopo

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// transformar const em let, e colocar o let dentro de dividirDois, e trocar o sinal de + por / em dividirDois

// O que fazer para total retornar 500?
var numero = 50;

// trocar 10 por 50
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero; // ou trocar o 10 por 50
console.log(total);
