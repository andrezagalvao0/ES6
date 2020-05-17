function getName(){
    return 'Andreza Galvão Almeida';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);