/*4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.*/

let vetor1 = [1, 3, 5]
let vetor2 = [2, 4, 6]
let vetor3 = []

for (let i = 0; i < 3; i++) {
    vetor3.push(vetor1[i])
    vetor3.push(vetor2[i])
}
alert(vetor3)