// String
// String é um tipo de valor que precisa ser definido entre aspas

let name1 = "Rinel"
let name2 = 'Vissuma'
let name3 = `Benjamim`

// Nos 2 primeiros casos são em tudo semelhantes
// No terceiro caso, as crases permitem que você use interpolação de string, ou seja, você pode usar expressões dentro da string para calcular valores dinamicamente. Por exemplo:

let name = "Rinel"

console.log(`Meu nome é ${name}`) // Meu nome é Rinel
console.log(`O resultado de 2 + 2 é ${2 + 2}`)