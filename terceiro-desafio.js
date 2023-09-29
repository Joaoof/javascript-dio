// let notas = {
//     Joao: [10, 30, 20],
//     Maria: [10, 50, 60],
//     Pedro: [10, 5, 3]
// }

const notas = [10, 40, 50]

const media = (notas[0] + notas[1] + notas[2]) / 3

if (media < 5 ) {
    console.log("Você foi reprovado")
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação")
} else {
    console.log("Você foi aprovado hehe!")
}

