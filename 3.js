/*3) Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.*/

let numerosDigitados
let listaImpares = []
let somaImpares = 0

for (let i = 0; i < 5; i++) {
    
    numerosDigitados = Number(prompt('Digite 5 números inteiros:'))
    if (numerosDigitados % 2 != 0) {
        listaImpares.push(numerosDigitados)
    }
}

for (let i = 0; i < listaImpares.length; i++) {
    somaImpares+= listaImpares[i]
    
}
alert(`Lista somente com números ímpares: ${listaImpares}`)