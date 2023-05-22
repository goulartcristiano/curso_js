//Async Await
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('PASSOU 1', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('Resultado:', resultado);
    console.log('PASSOU 2', 3 ** 3);
    console.log('PASSOU 3', 45 ** 9);
    console.log('PASSOU 4', 1 ** 1);
}


aguardar();