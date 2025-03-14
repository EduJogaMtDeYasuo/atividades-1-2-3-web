// inverterArray.js

function inverterArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }
  
  // Exportando a função para ser usada em outro arquivo
  module.exports = inverterArray;
  