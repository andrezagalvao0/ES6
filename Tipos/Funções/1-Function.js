function fn(){
    return 'Code Here';
}

const arrowFn = () => 'Code here'; //o mesmo que o de cima 
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code Here'; //se não houver nehuma instrução não precisa do return
}

//Funções tbm são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); //Não executará a função fn

/*
//controlFnExec como função
function controlFnExec(fnParam){ //function normal da representação da linha 23
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}*/