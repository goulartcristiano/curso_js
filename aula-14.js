const mensagem = 'Hello World';
const mensagem2 = 'Olá Mundo!';

console.log('Tamanho: ', mensagem.length);
console.log('Concat: ', mensagem.concat(mensagem2));
console.log('Concat +: ', mensagem + " " + mensagem2);
console.log('ES Concat: ', `${mensagem} ${mensagem2}`);
console.log('Substring: ', mensagem.substring(5));
console.log('Quebrar em array: ', mensagem.split(' '));
console.log('CAIXA ALTA: ', mensagem.toUpperCase());
console.log('caixa baixa: ', mensagem2.toLocaleLowerCase());
console.log('Replace: ', mensagem.replace('World', 'Universe'));