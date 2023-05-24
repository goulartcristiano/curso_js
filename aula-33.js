//ARRAY .SOME e .EVERY

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

const resultadoSome = lista.some((objeto) => objeto.idade > 50);
const resultadoEvery = lista.every((objeto) => objeto.idade >= 18);

console.log('Resultado Some:', resultadoSome);
console.log('Resultado Every:', resultadoEvery);