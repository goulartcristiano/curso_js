// Suponha que você está desenvolvendo um sistema de
// gestão de estoque para uma empresa de vendas de
// produtos eletrônicos.

// Crie uma classe Produto que tenha as
// seguintes propriedades: nome, preco,
// descricao, codigo, quantidade_em_estoque.

// A classe deve ter métodos para alterar o
// preço do produto, adicionar mais unidades do
// produto no estoque e remover unidades do
// produto do estoque. Esses métodos devem
// garantir que o preço seja um número
// positivo e que a quantidade de unidades em
// estoque nunca seja negativa.

// Em seguida, crie uma classe Smartphone que
// herde de Produto e adicione as
// seguintes propriedades: marca, modelo e
// sistema_operacional.

// A classe deve ter um método que retorne uma
// descrição completa do smartphone,
// incluindo todas as suas propriedades.

// Por fim, crie um objeto smartphone1 da
// classe Smartphone, altere seu preço,
// adicione mais unidades no estoque e
// exiba sua descrição completa.

// Obs.: Não precisa criar utilizando o
// Object.defineProperties, mas lembre de
// criar funções com essas regras
// dentro da classe.

class Produto {
    nome;
    preco;
    descricao;
    codigo;
    qtd_est;

    alterarPreco(novoPreco) {
        if (novoPreco >= 0) {
            this.preco = novoPreco;
        }
        
    }

    addEstoque(qtd) {
        this.qtd_est += qtd;
    }

    removeEst(qtd) {
        const novoEst = this.qtd_est - qtd;
        if (novoEst >= 0) {
           this.qtd_est = novoEst; 
        } 
    }

    constructor(nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.qtd_est = 0;

    }
}

class Smartphone extends Produto {
    marca;
    modelo;
    os;

    descricaoC() {
        return `
            nome: ${this.nome} \n
            preco: ${this.preco} \n
            codigo: ${this.codigo} \n
            descricao: ${this.descricao} \n
            nome: ${this.nome} \n
            marca: ${this.marca} \n
            modelo: ${this.modelo} \n
            sistema operacional: ${this.os}
        `
    }
    constructor(nome, descricao, codigo, marca, modelo, os) {
        super(nome, descricao, codigo);
        this.marca = marca;
        this.modelo = modelo;
        this.os = os;
    }
}

const smartphone1 = new Smartphone(
    'Redmi note 11',
    '250gb',
    'RN11PP5G',
    'Xiaomi',
    'Pro Plus 5G',
    'MIUI 14'
);

smartphone1.alterarPreco(1800.00);
smartphone1.addEstoque(5);

smartphone1.removeEst(6);
smartphone1.alterarPreco(1600.00);

console.log(smartphone1);