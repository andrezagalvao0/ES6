/*
for([expressaoInicial]; [condicao]; [incremento])
    declaracao
*/

const array = ['one,', 'two', 'tree'];

for(let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(`Element #${index}: ${element}.`);
}