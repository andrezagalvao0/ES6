const user = {
    name: "Andreza",
    lastName: "Galvão Almeida"
};

//Recupera as chaves do objeto
console.log("Propriedades do objeto user:", Object.keys(user));

//Retorna um array de array contendo [nome_propriedade, valor_propriedade]
console.log("\nLista de propriedades e valores:", Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullNme: "Andreza Galvão Almeida"});

console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log(
    "\nRetorna um novo objeto mergeando dois ou mais objetos",
    Object.assign({}, user, { age:25 })
);

//Previne todas as alterações em um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariável new Obj após as alterações:", newObj);

//Permite apenas a alteração de propriedade existentes em um objeto
const person ={ name: "Andreza" };
Object.seal(person);

person.name = "Andreza GAlvão";
delete person.name;
person.age = 25;

console.log("\nvariável person após as alterações:", person);