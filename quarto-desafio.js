// formula do imc IMC = peso / (altura * altura)

const peso = 70
const altura = 1.75
const imc = peso / Math.pow(altura, 2) // esse Math.pow() vai pegar como se fosse assim: (altura * altura)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do Peso")
} else if (imc >= 30 && imc < 40) {
    console.log("Obeso")
} else {
    console.log("Você morreu")
}

console.log(`Seu peso é: ${imc.toFixed(2)}`);