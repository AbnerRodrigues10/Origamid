// Crie um objeto com os seus dados pessoais, Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  name: "Abner",
  lastname: "Rodrigues",
  age: 25,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.lastname}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.marca = 3000;
// console.log(carro.marca);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  age: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Não latir";
    }
  },
};
