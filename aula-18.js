

function calcular(valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0(zero)')
    }
    return valor / 2;

}

try {
    const resultado = calcular(5);
    console.log('Resultado: ', resultado)
} catch (error) {
    console.log(error.message)
} finally {
    console.log('Chegou no finally')
}

console.log('continue a codar')