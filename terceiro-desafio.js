let notas = {
    Joao: [10, 30, 20],
    Maria: [10, 50, 60],
    Pedro: [10, 5, 3]
}

const media = (notas.Joao[0] + notas.Joao[1] + notas.Joao[2]) / 5

if (media < 5 ) {
    console.log("Você foi reprovado")
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação")
} else {
    console.log("Você foi aprovado")
}
