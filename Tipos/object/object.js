let user = {    
    name: "Andreza"
};

//Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user["name"] = "Outro nome 2"; //o meu q o de cima

const prop = "name";
user[prop] = "Outro nome 3";

//function gerProp(prop){
//    return user[prop];    
//}

//Criando uma propriedade
user.lastName = "Galvão Almeida";

//Deletando uma propriedade
delete user.name;