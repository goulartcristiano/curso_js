//Callback

const test1 = (Callback) => {
    setTimeout(() => {
        console.log('test1');
    }, 200)
}
const test2 = (Callback) => {
    setTimeout(() => {
        console.log('test2');
        Callback()
    }, 600)
}
const test3 = (Callback) => {
    setTimeout(() => {
        console.log('test3');
    }, 300)
}
const test4 = (Callback) => {
    setTimeout(() => {
        console.log('test4');
    }, 1)
}

const funcaoCallback = () => {
    console.log('SALVOU O USUÁRIO')
}

test1();
console.log(1 + 1)
test2(funcaoCallback);
test3();
console.log(2 + 3);
test4();