// Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de notas de 100, 50, 10, 5 e 1 que o
// valor lido pode ser decomposto. Exiba o valor lido e a decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2
// notas(s) de 10 1 nota(s) de 5 1 nota(s) de 1

var valor = prompt(`Insira um valor inteiro de reais`)
console.log(`Valor a ser decomposto - R$${valor}`)

CalcularNotasCem(valor)
console.log(`Notas de CEM utilizadas - ${cem}`)



function CalcularNotasCem(num1){
    cem = parseInt(num1 / 100)
    return sobraCinquenta = num1 - (100*cem)
}

