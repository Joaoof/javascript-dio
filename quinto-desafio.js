// produtos 
const produto1 = 200.00
const produto2 = 400.00
const produto3 = 700.00

// descontos 
const debito = 10 / 100
const pix = 15 / 100

// formula de calculo
const soma = produto1 + produto2 + produto3
const dezPorcento = debito * soma
const quinzePorcento = pix * soma
const result = soma - quinzePorcento

// validação do desconto 
if (soma >= 1000 ) {
    console.log(`Você recebeu 10% de desconto ${dezPorcento} valor final, valor final ${result}`);
} else {
    console.log('Inválido');
}