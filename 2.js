/*2) Desenvolva um programa que o usuário digite 10 números positivos e inteiros, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)*/

let primeraMetade = []
let segundaMetade = []
let numeros, resultado
let somaUm = 0
let somaDois = 0

for (let i = 0; i < 10; i++) {
    
    numeros = Number(prompt('Digite 10 números positvios e inteiros'))
    
    if (i < 5) {
     primeraMetade.push(numeros)
    } else {
     segundaMetade.push(numeros)
    }
}

for (let i = 0; i < primeraMetade.length; i++) {
    somaUm+= primeraMetade[i]
    
}
for (let i = 0; i < segundaMetade.length; i++) {
    somaDois+= segundaMetade[i]
    
}
alert(`Soma da Primeira metade dos Números: ${somaUm}
Soma da Segunda metade dos Números: ${somaDois}`)

resultado = somaUm - somaDois

alert(`Resultado do somatório da primeira metade dos números menos o somatório da segunda metade:
${resultado}`)


