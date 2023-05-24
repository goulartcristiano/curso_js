// ARRAY .REDUCE

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

// const pessoa = {
//     icaro: {
//         idade: 10,
//     },
//     daniela: {
//         idade: 37,
//     },
//     marcia: {
//         idade: 55
//     }
// }

const funcaoReduce = (acc, objeto) => { //acc = acumulador
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Théo.idade);
console.log(pessoasArray);
