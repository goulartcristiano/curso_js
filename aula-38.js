//Object.defineProperty e Object.defineProperties

const configuracaoPadrao = (valorInicial) => ({
        value: valorInicial,
        writable: false, // se true => usuario.nome = 'novo nome'
        configurable: false, // se true => deleta nome
        enumerable: true, // se true => exibe no objeto  
})

class Usuario {
    nome;
    senha;
    email;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;

        Object.defineProperties(this, {
            nome: configuracaoPadrao(nome),
            senha: configuracaoPadrao(senha),
            email: configuracaoPadrao(email)
        })

        Object.defineProperty(this, 'nome', {
            value: nome,
            writable: false, // se true => usuario.nome = 'novo nome'
            configurable: false, // se true => deleta nome
            enumerable: true, // se true => exibe no objeto
        })
    }
}
const usuario = new Usuario('emails', 'senhas', 'nomes');
usuario.nome = 'Novo nome';

console.log(usuario);