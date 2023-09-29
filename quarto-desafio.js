// formula do imc IMC = peso / (altura * altura)

const peso = 70
const altura = 1.75
const IMC = peso / Math.pow(altura, 2) // esse Math.pow() vai pegar como se fosse assim: (altura * altura)

if (IMC < 18.5) {
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Acima do Peso")
} else if (IMC >= 30 && IMC < 40) {
    console.log("Obeso")
} else {
    console.log("Você morreu")
}

console.log(`Seu peso é: ${IMC.toFixed(2)}`);