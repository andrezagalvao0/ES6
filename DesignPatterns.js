//Factory
function FakeUser(){
    return {
        name: 'Andreza',
        lastName: 'Galvão'
    }
}

const user = FakeUser(); //Factory


//Singleton
function MyApp() {
    if(!MyApp.instance){
        MyApp.instance = this;
    }
    return MyApp.instance;
}

//outro exemplo
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance =this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Andreza'});
const p2 = Pessoa.call({name: 'custon Name'});
console.log(p);
console.log(p2);   
//Mesmo se especificar um contexto diferente, ele vai retornar a mesma instancia

//Decorator 
let loggeIn = false;

function callIfAuthenticated(fn){
    return !!loggeIn && fn();
}

function sum(a,b){
    return a+b;
}

console.log(callIfAuthenticated(() => sum(2,3)));
loggeIn = true;
console.log(callIfAuthenticated(() => sum(2,3)));
loggeIn = false;
console.log(callIfAuthenticated(() => sum(2,3)));

//outro exemplo
function readoly(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
}

class job{
    @readonly
    title(){return 'CEO'}
}

//exemplo no angular(decorator component)
@Component({
    selector: 'app-reactive-favorite-color',
    template: `
        Favorite Color: <input type="text" [formControl] ="favoriteColorControl">
        `
})

export class FavoriteColorComponent{
    favoriteColorControl = new FormControl('');
}



//Observer
class Observable{
    constructor(){
        this.observers = []; //tem que manter uma lista de observers
    }

    subscribe(f){            //tem que ter uma função subscriber que permite q adicione subscribers em subservers
        this.observers.push(f);
    }

    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data){    //e tem que ter uma função notify
        this.observers.forEach(observer => observer(data));
    }
}
//O observer é basicamente, Manter uma lista, dar um subscriber e notificar

//Outro exemplo
class Observable{
    constructor(){
        this.observables = [];
    }

    subscribe(fn){
        this.observables.push(fn);
    }

    notify(data){
        this.observables.forEach(fn => fn(data));
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log('Subscribe 1: $(data)');
const logData2 = data => console.log('Subscribe 2: $(data)');
const logData3 = data => console.log('Subscribe 3: $(data)');

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');


//Module
class Person {
    constructor(name){
        this.name = name;
    }
}

export default Person;

//Utilizar Person
import Person from './models/person';


//Outro exemplo
let name = 'default';

function getName(){
    return name;
}

function setName(newName){
    name = newName;
}

module.exports = {
    getName,
    setNAme
}
//criar um arquivo para importar a funcionalidade acima
const {getName, setName} = require('./05-module.js'); //esse requere é o nome do arquivo q seria o de cima

console.log(getName);
console.log(setName('Andreza'));
console.log(getName());