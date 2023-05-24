//ARRAY .REDUCE

const lista = [
    {
        nome: 'Ícaro',
        idade: 10,
        exibir: true
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
        idade: 5,
        exibir: true
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

const pessoas = lista.reduce((acc, objeto) => { //ACC = Acumulador
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}, {})

console.log(pessoas);
console.log(pessoas.Théo.idade);