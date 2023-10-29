// Função para calcular a média de um array de números
function calcularMedia(numeros) {
  if (numeros.length === 0) {
    return 0; // Retorna 0 se o array estiver vazio
  }

  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma / numeros.length;
}

// Exemplo de uso
const numeros = [10, 20, 30, 40, 50];
const media = calcularMedia(numeros);
console.log("A média dos números é: " + media);
