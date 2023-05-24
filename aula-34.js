//ARRAY .flatMap

const lista = [
    {
        nome: 'Ícaro',
        idade: 10,
        cartoes: ['3244', '5435']
    },
    {
        nome: 'Cristiano',
        idade: 38,
        cartoes: ['8963', '3698']
    },
    {
        nome: 'Daniela',
        idade: 37,
        cartoes: ['6699', '7755']
    },
    {
        nome: 'Théo',
        idade: 5,
        cartoes: ['3248', '6887']
    },
    {
        nome: 'Pedro',
        idade: 74,
        cartoes: ['5247', '7854']
    },
    {
        nome: 'Salézia',
        idade: 68,
        cartoes: ['9988', '1199']
    },
    {
        nome: 'Enio',
        idade: 59,
        cartoes: ['2589', '5004']
    },
    {
        nome: 'Márcia',
        idade: 55,
        cartoes: ['3554', '5785']
    }
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes)

console.log(cartoes);