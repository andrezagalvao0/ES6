'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vem esse "split"?

//Mesma declaração que a de cima 
'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split); //f split() { [native code] }
/** Explicação da construção acima
 * Função construtora chama String, toda função construtora tem um
 * prototype atrelado a ela. E toda vez que crio uma variável a 
 * partir de uma função construtora, eu terei a referencia do 
 * proto nela.
 * splite que é carregado no prototype da função construtora String
 */


 'use strict';

 const myText = String('Hello prototype!');

 console.log(myText.__proto__.split === String.prototype.split); //true
 /**Explicação da construção acima
  * Se eu comparar o __proto__.split ele vai ser === a função split dentro 
    do prototype da função construtora String. Basicamente o proto
    aponta para o prontotype de String
  */


 'use strict';

 const myText = String('Hello prototype!');

 console.log(myText.__proto__.split === String.prototype.split); //true

 console.log(myText.constructor === String); //true
/* Explicação da construção acima
    Se a comparação for verdadeira eu posso assumir que a constructor do 
    myText é String, então ambas retornam verdadeiro
*/ 


const myText = 'Hello prototype!'

myText.construct -> String //o constructor do myText é um String
myText.__proto__ -> String.prototype //e o proto vai ser igual ao String.prototype

//Criada uma função
'use strict';

function Animal() {}

console.log(Animal.constructor); //f Function() { [native code] }
// O constructor dela o o Function()


'use strict'

function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);//4
/**
 * To criando um animal que é cachorro e dentro dele estou criando o 
    atributo qtdaPatas
 */


new Foo(...); //O que acontece quando eu chamo uma função construtor com new
/**
 * O que ocorre?
 * 1 - Um novo objeto é criado, herdando Foo.prototype
 * 2 - A função construtora Foo é chamada com os argumentos especificados 
 * e com o 'this' cinculado ao novo objeto criado. 
 * 3 - Caso a funçao construtora tenha um retorno explicito, será respeitado o 
 * seu 'return'. Senhão, será retornado o objeto criado no passo 1.
 */

 /**---------------------------------------------------------------------------------------------------------- */
'use strict'

function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);//proto de cachorro aponta para o prototype de Animal
//true

console.log(Animal.__proto__ === Function.prototype);//proto de Animal aponta para o prototype de Function
//true

/**------------------------------------------------------------------------------ */
'use strict'

function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal);//cachorro é uma instancia de animal
//true

console.log(cachorro instanceof Function)
//false


/**---------------------------------------------------------------------------------------- */
'use strict'

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde){
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
//Cachorro {qtdePatas: 4, morde: false}

/**Explicação da construção acima
 * função construtura(Cachorro) é derivada da Animal; call permite que a
 *  função passe um contexto para essa função ser executada. 
 * Passando o objeto novo de cachorro para a função Animal
 */


 'use strict';

 function Animal(){}

   Animal.prototype.qtdePatas = 0;
   Animal.prototype.movimentar = function(){}

   function Cachorro(morde){ //O Cachorro já vai ter a qtdePatas e movimentar por padrão. Herda as propriedade de animal
     this.qtdePatas = 4;
     this.morde = morde;
   }

   Cachorro.prototype = Object.create(Animal); 
   Cachorro.prototype.latir = function(){
     console.log('Au! au!');
   }

   const pug = new Cachorro(false);
   const pitbull = new Cachorro(true);
 
/**Quando é criado o prototype de cachorro eu digo que ele é derivado de 
animal. */


//Classe
//Terá a mesma saída da função da linha 118(é a mesma coisa). Essa é a mais comum
'use strict';

class Animal{
  constructor(qtdePatas){
    this.qtdePatas = 4;
  }
}

class Cachorro extends Animal{ //herança
  constructor(morde){
    super(4);
    this.morde = 4;
  }

}

const pug = new Cachorro(false);

console.log(pug);
//Cachorro {qtdePatas: 4, morde: 4}


//MODIFICADORES DE ACESSO

'use strict';

function Person(initialName){
  let name = initialName;

  this.getName = function(){
    return name;
  }

  this.setName = function(newName){
    name = newName;
  }
}

const p = new Person('Andreza');
//atributo name é privado e coloco getName e setName(para modificar e alterar esse atributo)
//para que alguém de fora possa acessar

'use strict'; //mostrando o resultado da função acima

console.log(p);
//Person {getName: f, setName: f}

p.getName();
//"Andreza"

p.name;
//undefined

p.setName('Luiz');
p.setName();
//"Luiz"



//#(versão 12 do JS) -> é o modificador de acesso do javaScript. Determina que uma 
//variavel é privada.
'use strict';

class Person{
  #name = '';

  constructor(initialName){
    this.#name = initialName;
  }

  setName(name){
    this.#name = name;
  }

  getName(){
    return this.#name;
  }
}

'use strict';

console.log(p);
//Person {}

p.getName();
//"Andreza"

p.name;
//undefined

p.setName('Luiz');
p.getName();
//"Luiz"


//ENCAPSULAMENTO
'use strict';

function Person(initialName){
  var name = initialName;

  Object.defineProperty(this, 'name', {
    get: function(){
      return name;
    }
  })
}

'use strict';

class Person {
  #name = '';

  constructor(name){
    this.#name = name;
  }

  get name(){
    return this.#name;
  }

  set name(name){
    this.#name = name;
  }
}


//Static
'use strict';

class Person{
  static walk(){
    console.log('walking...');
  }
}

console.log(Person.walk());
//"walking..."