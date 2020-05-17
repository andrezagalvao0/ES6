//in
something in somethingItems

//Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; //retorna true (esse valor 0 que dizer o indice do array)
3 in arvores; //retorna true
6 in arvores; //retorna false
"cedro" in arvores; //retorna false(voce deve especificar o numero do indice, 
                    //não o valor naquele indice)
"length" in arvores //retorna true(length é uma propriedade de Array)

//Objetos predefinidos
"PI" in Math; //Retorna true
var minhaString = new String("coral");
"length" in minhaString; //retorna true

//Objetos personalizados
var meucarro = {marca:"Honda", modelo:"Accord", ano: 1998};
"marca" in meucarro; //retorna true
"modelo" in meucarro; //retorna true

//instaceof
//Dia é instancia de Date
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if(dia instanceof Date){
    //code here
}
