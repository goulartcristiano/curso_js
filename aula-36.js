// HERANÇA (extends)

class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario {
    permissoes;

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario {
    compras;
}

const admin = new Administrador('email@gmail.com', 'senha', 'Jose', [1, 6]);
const comprador = new Comprador();
comprador.senha = 'A1b2c3d4'
console.log(admin);
console.log(comprador);