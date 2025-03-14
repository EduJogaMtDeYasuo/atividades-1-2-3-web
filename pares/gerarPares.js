// gerarPares.js

function gerarNumerosPares(N) {
    let numerosPares = [];
    for (let i = 1; i <= N; i++) {
      numerosPares.push(i * 2);  // Multiplica i por 2 para obter o número par
    }
    return numerosPares;
  }
  
  // Exporta a função para ser usada em outro arquivo
  module.exports = gerarNumerosPares;
  