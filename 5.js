/*5) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas.*/

let saladaFrutas = []
let frutas = ''

do {
    frutas = prompt('Quais frutas devemos adicionar antes da \nCereja para finalizar a Salada de frutas?')
    
} while (frutas != 'cereja' && frutas != 'Cereja'){

    saladaFrutas.push(frutas)
}
alert(`Esse são os ingredientes da salada de frutas ${saladaFrutas}`)


