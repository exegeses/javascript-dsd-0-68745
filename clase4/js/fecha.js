//ubicamos elemento dentro del DOM
const texto = document.querySelector('#texto');
/*
    mostrar la fecha
    formato:  Jueves 07/12/2023
*/
//creamos objeto de fecha
const fecha = new Date();
console.log( 'Fecha: ', fecha );

//obtenemos un número del día de la semana
let numeroSemana = fecha.getDay();
/* if (numeroSemana == 0){
    numeroSemana = 'Domingo'
}
else if (numeroSemana == 1){
    numeroSemana = 'Lunes'
}
else if (numeroSemana == 2){
    numeroSemana = 'Martes'
}
else if (numeroSemana == 3){
    numeroSemana = 'Miercoles'
}
else if (numeroSemana == 4){
    numeroSemana = 'Jueves'
}
else if (numeroSemana == 5){
    numeroSemana = 'Viernes'
}
else {
    numeroSemana = 'Sabado'
} */

let diaSemana;
switch(  numeroSemana )
{
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}
console.log('dia de la semana: ', diaSemana);

// obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0' + diaMes;
}
console.log('dia del mes: ', diaMes); 

// obtenemos el número de mes actual
let mes = fecha.getMonth() +1;
if( mes < 10 ){
    mes = '0' + mes;
}
console.log('mes actual: ', mes);

// obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log('Año actual: ', anio);

/* imprimimos dentro del span */
    // concatenación
//texto.innerText = diaMes +'/'+ mes +'/'+ anio;
    // interpolación de cadenas
texto.innerText = `${diaSemana} ${diaMes} / ${mes} / ${anio}`;