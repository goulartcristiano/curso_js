//process.stdin.setEncoding('utf8');

const soma = (valor) => {
    if (valor === 0) {
        return 0;
    }
    return valor + soma(valor -1)
}

process.stdin.on('data', function(data) {
    console.log('Soma:', soma(number(data)));
});


