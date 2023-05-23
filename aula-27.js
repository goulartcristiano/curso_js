// forEach

const lista = [
    {
        nome: 'Ícaro',
        idade: 10
    },
    {
        nome: 'Cristiano',
        idade: 38
    },
    {
        nome: 'Daniela',
        idade: 37
    },
    {
        nome: 'Théo',
        idade: 5
    },
    {
        nome: 'Pedro',
        idade: 74
    },
    {
        nome: 'Salézia',
        idade: 68
    },
    {
        nome: 'Enio',
        idade: 59
    },
    {
        nome: 'Márcia',
        idade: 55
    }
]

let soma = 0;
// for(let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);
console.log('Soma:', soma)

lista.forEach((objeto) => console.log(objeto));