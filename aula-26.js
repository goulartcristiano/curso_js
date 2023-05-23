//ARRAY .MAP

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

const convertObjeto = (objeto) => {
    return {
        ...objeto, //spratch
        //nome: objeto.nome,
        //idade: objeto.idade,
        nomeIdade: `${objeto.nome} tem ${objeto.idade} anos`
    }
}

console.log(lista.map(convertObjeto));