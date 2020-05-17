const name = 'Andreza';

//Não podemos mudar o valor(varivel primitiva)
//name = 'Andreza';

const user = {
    name: 'Andreza'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
//user = {
  //  name: 'Andreza'
//};

const persons = ['Andreza', 'Pedro', 'Jennifer'];

//Podemos adicionar novos itens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);