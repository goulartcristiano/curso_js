const idade = 12;

const exibirIdade = () => {
    console.log(idade);
}

const reexibirIdade = () => {
    exibirIdade();
}

reexibirIdade();