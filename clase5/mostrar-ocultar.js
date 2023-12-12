const caja = document.querySelector('#caja');

caja.style.display = 'block'; 
/* redundante, pero NECESARIO para 
    que funcione desde el primer click
*/
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}
function mostrarOcultar()
{
    // si la caja se ve
    if( caja.style.display == 'block' ){
        // ocultamos la caja
        ocultar();
    }
    else{
        // mostramos ls caja
        mostrar();
    }
}

