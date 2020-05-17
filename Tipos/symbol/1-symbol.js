const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são unicos
console.log("symbol1 é igual a symbol2", symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [nameSymbol1]: "Andreza",
    [nameSymbol2]: "Outro nome",
    lastName: "Galvão Almeida"
};

console.log(user);

//Symbols criam propriedades não enumerables
for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log("Propriedades do objeto user:", Object.keys(user));
console.log("Valores das propriedade do objeto user:", Object.values(user));

//Exibir symbols de um projeto
console.log(
    "Symbols registrados no objeto user:",
    Object.getOwnPropertySymbols(user)
);

//Acessando todas as proriedades do objeto
console.log("Todas propriedades do objeto user:", Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP: Symbol("UP"),
    DOWN: Symbol("DOWN"),
    LEFT: Symbol("LEFT"),
    RIGHT: Symbol("RIGHT")
};