const etanol = 2.53
const gasolina = 5.82
const combustivelCarro = gasolina
const gastoMedioPorKm = 100
const distanciaViagem = 300

const gastoMedioCombustivel = gastoMedioPorKm / distanciaViagem
const custoViagem = gastoMedioCombustivel * combustivelCarro

console.log('o valor gasto da viagem será:', custoViagem.toFixed(2));