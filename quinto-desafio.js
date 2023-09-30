// produtos 
const produto1 = 100.00
const produto2 = 100.00
const produto3 = 100.00

// descontos 
const debito = false
const pix = false

const parcelar2x = false

const juros = 0.10
const numParcelas = 3

// formula de calculo
const soma = produto1 + produto2 + produto3

// validação do desconto 
if (debito) {
    valorComDesconto = 0.10 * soma
    console.log(valorComDesconto)
    console.log(`valor com desconto débito: ${valorComDesconto}, valor final do produto ${soma - valorComDesconto}`)
} else if (pix) {
    let valorComDesconto = 0.15 * soma
    console.log(`Você recebeu 15% de desconto ${valorComDesconto}, valor final ${soma  - valorComDesconto}`);
} else if (parcelar2x) {
    let dividir =  soma / 2
    console.log(`Você pode dividir em 2 vezes, ${dividir}, valor final ${soma}`);
} else {
   if (numParcelas >= 3) {
    let jurosA = soma * juros * numParcelas
    let result = soma + jurosA

    console.log(`Seu valor de ${numParcelas} na parcela resultou 10% de juros, ficando o valor: ${result}`);
   }
}