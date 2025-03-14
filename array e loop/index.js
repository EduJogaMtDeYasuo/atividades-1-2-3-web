// index.js (ou principal.js)

// Importando a função do arquivo externo
const inverterArray = require('./inverterArray');

// Criando um array de números
let arrayOriginal = [1, 2, 3, 4, 5];

// Usando a função para inverter o array
let arrayInvertido = inverterArray(arrayOriginal);

// Exibindo o resultado
console.log(arrayInvertido);  // Saída: [5, 4, 3, 2, 1]
