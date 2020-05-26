//Criar um array
const arr = [1,2,3];
const arr2 = new Array(1,2,3);

const persons = Array.of('John', 'Cris', 'Jenny');
const numbersAndStrings = Array.of(1,2,'strings', 'texto');

const arr = Array(3);//vai criar um array com 2 posições vazias
//[empty x 3]

const arr2 = Array(3,2);
//[3,2]

const divs = document.querySelectorAll('div'); //node list //todas as div q ele encontrar na página vai ser armazenada na variavel divs
const arr = Array.from(divs);


//Inserir e Remover elementos
const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola'); //insere no final

console.log(arrLength) //4(tamanho do meu array)
console.log(arr); //['banana','melancia','abacate','acerola']

/*-----------------------------------------------------------------*/

const arr = ['banana', 'melancia', 'abacate'];
const removeItem = arr.pop(); //remove o último

console.log(removeItem);//'abacate'
console.log(arr); //['banana', 'melancia']

/*-----------------------------------------------------*/

const arr = ['banana','melancia', 'abacate'];
const arrLength = arr.unshift('acerola'); //insere no inicio

console.log(arrLength); //4
console.log(arr);//['acerola','banana','melancia', 'abacate'];

/*---------------------------------------------------------------*/

const arr = ['banana', 'melancia', 'abacate'];
const removeItem = arr.shift(); //remove o primeiro

console.log(removeItem);//'banana'
console.log(arr); //['melancia', 'abacate']

/*----------------------------------------------*/
//concatenar 1 ou mais arrays
const arr = [1,2,3];
const arr2 = [4,5,6];

const novoArr = arr.concat(arr2);

console.log(arr);//(3) [1,2,3]
console.log(arr2);//(3) [4,5,6]
console.log(novoArr); //(6) [1,2,3,4,5,6]

/*-----------------------------------------------*/

const arr = [1,2,3,4,5];

arr.slice(0,2);//[1,2] //Fatia o array de acordo com o inicio e fim
arr.slice(2);//[3,4,5] //pega a partir da posição 2
arr.slice(-1);//[5] 
arr.slice(-3);//[3,4,5] //pega 3 posições a partir da última

/*----------------------------------------------------------------------*/
const arr = [1,2,3,4,5];

arr.splice(2)//[3,4,5] //a partir da posição 2 ele vai remover 
console.log(arr);//[1,2]

arr.splice(0,0,'first');//[] //adicionar em um determinado lugar(depois dessa posição, não remove nada(qt de itens q que remover) e add o q vou querer a partir da primeira posição)
console.log(arr);//["first", 1,2]



//Iterar Elementos
const arr =[1,2,3,4,5];

arr.forEach((value, index) => {  //Com forEach
    console.log(`${index}: ${value}`); //value - valor do array; index - a posição
});

/*-------------------------------------------------------*/
const arr = [1,2,3,4,5];

arr.map(value => value* 2);// Com map
//[2,4,6,8,10]

/*------------------------------------------------------*/
const arr = [1,2,[3,4]];
arr.flat(); //Com flat   //como não especificou a profundidade, por padrão é 1
//[1,2,3,4]

/*----------------------------------------------------*/
const arr = [1,2,3,4];

arr.flatMap(value => [value * 2]); //Com flatMap
//[2,4,6,8]

arr.flatMap(value => [[value * 2]])//[[2], [4], [6], [8]]

/*----------------------------------------------------------------*/
const arr = [1,2,3,4];

const arrIterator = arr.keys();// Com keys

arrIterator.next();
//{value:0, done: false}

arrIterator.next();
//{value: 1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: true}

/*------------------------------------------------------------*/
const arr = [1,2,3,4];

const arrIterator = arr.values();// Com values

arrIterator.next();
//{value:1, done: false}

arrIterator.next();
//{value: 2, done: false}

arrIterator.next();
//{value: 3, done: false}

arrIterator.next();
//{value: 4, done: true}

/*------------------------------------------------------------*/
const arr = [1,2,3,4];

const arrIterator = arr.entries();// Com entries

arrIterator.next();
//{value: [0,1], done: false}

arrIterator.next();
//{value: [1,2], done: false}

arrIterator.next();
//{value: [2,3], done: false}

arrIterator.next();
//{value: [3,4], done: true}




//Buscar Elementos
const arr = [1,2,3,4];

const firstGreaterThanTwo = arr.find(value => value > 2); //Com find

console.log(firstGreaterThanTwo);//3

/*--------------------------------------------------------*/
const arr = [1,2,3,4];

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2); //Com findIndex
console.log(firstIndexGreaterThanTwo);//2

/*------------------------------------------------------------*/
const arr = [1,2,3,4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2); //Com filter
console.log(allValuesGreaterThanTwo);//[3,4]

/*---------------------------------------------------------------*/
const arr = [1,3,3,4,3];

const firstIndexOfItem = arr.indexOf(3); //Com indexOf
console.log(firstIndexOfItem);//1

/*------------------------------------------------------*/
const arr = [1,3,3,4,3];

const lastIndexOfItem = arr.lastIndexOf(3); //Com lastIndexOf
console.log(lastIndexOfItem);//4

/*--------------------------------------------------------*/
const arr = [1,3,3,4,3];

const hasItemOne = arr.includes(1);// Com includes
//true

const hasItemTwo = arr.includes(2);
//false

/*=----------------------------------------------------------*/
const arr = [1,3,3,4,3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);//Com some
//true

/*--------------------------------------------------------------*/
const arr = [1,3,3,4,3];

const allEvenNumbers = arr.every(value => value % 2 === 0);//Com every
//false


//Ordenar elementos
const arr = [1,3,2,5,4];

arr.sort(); //Com sort
//[1,2,3,4,5]

/*----------------------------------------------------*/
const arr = [1,2,3,4,5];

arr.reverse();//Com reverse
//[5,4,3,2,1]



//Transformar em outro tipo de dados
const arr = [1,2,3,4,5];

arr.join('-'); //Com join
//"1-2-3-4-5"

/*-------------------------------------------*/
const arr = [1,2,3,4,5];

arr.reduce((total, value) => total += value, 0); //Cpm reduce //total iniciando com 0
//15



