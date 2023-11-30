/*
    para declarar variables utilizamos
    la palabra reservada "let"
*/
let numero = 42;
let frase = 'Hola mundo';

/* 
    para declarar constantes utilizamos
    la palabra reservada "const"    
*/
const nombre = 'Marcos';


//imprimimos valor de variable en el documento
document.write( numero );
document.write( '<br>' );
document.write( frase );
document.write( '<br>' );
document.write( nombre );
document.write( '<br>' );

//sobreescritura de valores almacenados
numero = 73;
document.write( numero );
document.write( '<br>' );

frase = 'Javascript desde 0';
document.write( frase );

document.write( '<br>' );
// nombre = 'jyrt';  no se puede sobreescribir una constante
