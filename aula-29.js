// ARRAY .FIND

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

const buscarPessoa = (pessoa) => pessoa.nome === 'Cristiano'
const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);