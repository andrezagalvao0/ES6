const users = ['Guilherme', 'Pedro', 'jennifer']; //array

const gender = {
    MAN: Symbol('M'), //enum
    WOMAN: Symbol('F')
};

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Itens: ', persons.length);

//Verificar se é array
console.log('A variavel persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => { //map - mapea os elementos de um array para um novo array
    person.course = 'Introdução ao JavaScript'; //introduziu course ao const persons
    return person;
});

console.log('\nPessoas com adição de course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => { //reduce - transformar o array em um outro tipo
    age += person.age;
    return age;
}, 0); //age começando com valor 0

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons 
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges);

//filter, map, reduce- retornam um novo objeto