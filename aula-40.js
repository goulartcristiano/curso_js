//SPREAD Operator

const qualquer = {
    abc: 'batata',
    def: 'cebola',
    ghi: 'tomate',
    jkl: 'alho'
}

// const novoQualquer = {
//     abc: qualquer.abc,
//     def: qualquer.def,
//     ghi: qualquer.ghi,
//     jkl: qualquer.jkl,
//     mno: 'salsa'
// }
const novoQualquer = {
    ...qualquer, //spread operator
    mno: 'salsa'
}

const lista = [12, 34, 56, 78, 90];
const lista2 = [13, 35, 57, 88, 40];

console.log(novoQualquer);

console.log(lista);
console.log(lista2);

const listaJunta = [//lista.concat(lista2);
    ...lista,
    ...lista2
]

console.log('Lista Junta:', listaJunta);