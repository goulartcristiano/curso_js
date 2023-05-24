//ORIENTAÇÃO A OBJETO CLASS

class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}
const filho1 = new Pessoa('Ícaro', 10);
const filho2 = new Pessoa('Théo', 5);

console.log('Filho 1 tem:', filho1.quantosFilhos());
console.log('Filho 2 tem:', filho2.quantosFilhos());

const pessoa = new Pessoa('Cristiano', 38, [filho1, filho2]);

console.log(pessoa);