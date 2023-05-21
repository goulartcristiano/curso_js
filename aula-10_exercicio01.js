const COMSUMO_AUTOMOVEL = 12;

function gastoCombustivel(tempoGasto, velocidadeMedia) {
    const distancia = velocidadeMedia * tempoGasto;
    const consumoFinal = distancia / COMSUMO_AUTOMOVEL;

    return consumoFinal.toFixed(3);
}

console.log(gastoCombustivel(10, 85), 'litros');
console.log(gastoCombustivel(2, 92), 'litros');
console.log(gastoCombustivel(22, 67), 'litros');