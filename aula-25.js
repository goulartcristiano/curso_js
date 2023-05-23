//Objeto Simples

const cristiano = {
    idade: 38,
    peso: 89,
    nome: 'Cristiano',
    sobrenome: 'Venâncio Goulart',
    estadocivil: 'Casado',
    filho: 2,
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua São João Batista',
    numero: 56,
    cidade: 'Imaruí',
    estado: 'Santa Catarina',
}

const exibirInformacoes = (pessoa) => {
        console.log('Dados:', pessoa);
        console.log(`Descrição: ${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.idade} anos, ${pessoa.genero}, ${pessoa.estadocivil}, ${pessoa.nacionalidade}, residente e domiciliado na ${pessoa.endereco}, número ${pessoa.numero}, ${pessoa.cidade}, ${pessoa.estado}`)
}

exibirInformacoes(cristiano)