// ARRAY FILTER

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

const filtrarPessoa = (pessoa) => pessoa.idade > 18;
const listaFiltrada = lista.filter(filtrarPessoa);
const listaKid = lista.filter((pessoa) => !!pessoa.exibir);

console.log(lista);
console.log(listaFiltrada);
console.log(listaKid);