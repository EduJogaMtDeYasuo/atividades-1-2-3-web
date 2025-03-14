// index.js

// Importando a função do arquivo externo
const gerarNumerosPares = require('./gerarPares');

// Definindo N
let N = 6;  // Por exemplo, para gerar os primeiros 6 números pares

// Chamando a função para gerar os números pares
let resultado = gerarNumerosPares(N);

// Exibindo o resultado
console.log(resultado);  // Saída: [2, 4, 6, 8, 10, 12]
