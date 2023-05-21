
function teste(key) {
    console.log('Começou a verificação do case.')
    switch (key) {
        case   'Cristiano':
            console.log('Cristiano aqui!');
            break;
            
        case 'Júlio':
            console.log('Júlio aqui!');
            break;

        case 'João':
            console.log('João aqui!');
            break;

        default:
            console.log('Outro aqui!');
            break;
    }
}
teste('João')