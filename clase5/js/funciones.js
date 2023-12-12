//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos función/es de control
function pintarVerde()
{
    caja.style.backgroundColor='hsl(120, 50%, 60%)'; 
    caja.innerText='Verde';
}
function pintarCeleste()
{
    caja.style.backgroundColor='hsl(195, 50%, 60%)';
    caja.innerText='Celeste';
}
function pintarNaranja()
{
    caja.style.backgroundColor='hsl(30, 50%, 60%)';
    caja.innerText='Naranja';
}