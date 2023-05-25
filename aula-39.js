//GET e SET

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
        nome: {
            get: () => nome,
            set: (value) => nome = value
        },
        senha: {
            get: () => senha,
            set: (value) => {
                if (value.length < 4) {
                    throw new TypeError('Precisa de no mínimo 4 caracteres')
                }
                senha = value
            }
        },
        email: {
            get: () => email,
            set: (value) => email = value
        }
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
usuario.senha = 'adda';

console.log(usuario.senha);