// BigInt

// O tipo BigInt é um tipo de dado numérico que pode representar números inteiros muito grandes, além do limite do tipo Number. Ele é útil para lidar com números que excedem a capacidade de armazenamento do tipo Number, que é de aproximadamente 2^53 - 1.

// Para criar um BigInt, você pode usar a função BigInt() ou adicionar a letra "n" ao final de um número inteiro. Por exemplo:

let bigInt1 = BigInt(123456789012345678901234567890);
let bigInt2 = 123456789012345678901234567890n;

console.clear()
console.log(bigInt1) // 123456789012345678901234567890n
console.log(bigInt2) // 123456789012345678901234567890n

// O tipo BigInt suporta operações matemáticas básicas, como adição, subtração, multiplicação e divisão. No entanto, ele não é compatível com o tipo Number, então você não pode misturar os dois tipos em uma operação matemática sem converter um deles para o outro.