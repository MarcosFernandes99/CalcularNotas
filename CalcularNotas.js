// Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de notas de 100, 50, 10, 5 e 1 que o
// valor lido pode ser decomposto. Exiba o valor lido e a decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2
// notas(s) de 10 1 nota(s) de 5 1 nota(s) de 1

var valor = prompt(`Insira um valor inteiro de reais`)
console.log(`Valor a ser decomposto - R$${valor}`)

CalcularNotasCem(valor)
console.log(`Notas de CEM utilizadas - ${cem}`)

CalcularNotasCinquenta()
console.log(`Notas de CINQUENTA utilizadas - ${cinquenta}`)

CalcularNotasDez()
console.log(`Notas de DEZ utilizadas - ${dez}`)

CalcularNotasCinco()
console.log(`Notas de CINCO utilizadas - ${cinco}`)

CalcularNotasUm()
console.log(`Notas de UM utilizadas - ${um}`)


function CalcularNotasCem(num1){
    cem = parseInt(num1 / 100)
    return sobraCinquenta = num1 - (100*cem)
}

function CalcularNotasCinquenta(){
    cinquenta = parseInt(sobraCinquenta/50)
    return sobraDez = sobraCinquenta - (50*cinquenta)
}

function CalcularNotasDez(){
    dez = parseInt(sobraDez/10)
    return sobraCinco = sobraDez - (10*dez)
}

function CalcularNotasCinco(){
    cinco = parseInt(sobraCinco/5)
    return sobraUm = sobraCinco - (5*cinco)
}

function CalcularNotasUm(){
    um = parseInt(sobraUm/1)
}