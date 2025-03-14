// Criar o array original
let arrayOriginal = [1, 2, 3, 4, 5];

// Novo array para armazenar os elementos invertidos
let arrayInvertido = [];

// Loop para inverter o array
for (let i = arrayOriginal.length - 1; i >= 0; i--) {
  arrayInvertido.push(arrayOriginal[i]);
}

// Exibir o array invertido
console.log(arrayInvertido);  // Saída: [5, 4, 3, 2, 1]
