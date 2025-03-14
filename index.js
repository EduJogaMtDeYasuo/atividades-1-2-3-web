const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

// Definindo o sinal da operação, pode ser fixo ou variável
let sinal = '+'; // Alterar o sinal para testar outras operações
let num1 = 10;   // Primeiro número
let num2 = 5;    // Segundo número

// Função para realizar a operação com base no sinal
function realizarOperacao(sinal, a, b) {
  switch (sinal) {
    case '+':
      return somar(a, b);
    case '-':
      return subtrair(a, b);
    case '*':
      return multiplicar(a, b);
    case '/':
      return dividir(a, b);
    default:
      return "Operação inválida!";
  }
}

// Chamada da função e exibição do resultado
let resultado = realizarOperacao(sinal, num1, num2);
console.log(`Resultado de ${num1} ${sinal} ${num2} = ${resultado}`);