// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
    // los a que estan dentro de ¢navagacion
const botones = document.querySelectorAll('#navegacion a');

console.log( botones )

/* declaración de funciones */
function saludar( nombre )
{
    console.log('hola ', nombre);
}
function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}
/*function pintarVerde()
{
    caja.style.backgroundColor = 'hsl(120, 50%, 50%)';
}
function pintarNaranja()
{
    caja.style.backgroundColor = 'hsl(30, 50%, 50%)';
}*/


// invocamos función saludar
saludar('frank');
saludar('mario');
saludar('pablo');

/* Centralizamos el código en el JavaScript */
botones[0].addEventListener(
        'click',
        ()=>{
            pintar('hsl(120, 50%, 50%)');
        }
);
botones[1].addEventListener(
        'click',
        ()=>{
            pintar('hsl(30, 50%, 50%)');
        }
);
botones[2].addEventListener(
        'click',
        ()=>{
            pintar('hsl(180, 50%, 50%)');
        }
);
