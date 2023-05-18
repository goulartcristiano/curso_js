const quantidade = 10;
let soma = 1;

//no for é passado 3 informações: Variavel, Validação, Tarefa
//++ -> i = i + 1
for(let i = 0; i < quantidade; i++){
    console.log(i);
    soma = soma + i;
}

console.log('FIM!', soma)