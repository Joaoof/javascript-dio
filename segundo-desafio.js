const etanol = 2.53
const gasolina = 5.82
const combustivelCarro = gasolina
const gastoMedioPorKm = 100
const distanciaViagem = 300

const gastoMedioCombustivel = gastoMedioPorKm / distanciaViagem

if (combustivelCarro === gasolina) {
    const custoViagem = gastoMedioCombustivel * gasolina
    console.log(custoViagem);
} else {
    const custoViagem = gastoMedioCombustivel * etanol
    console.log(custoViagem);
}

