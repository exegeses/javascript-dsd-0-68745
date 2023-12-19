const texto = document.querySelector('#texto');

// valores iniciales
let numero = 0;
texto.innerText = numero;
let intervalo;
let flag = 0;

//declaramos función de control
function timer()
{
    // incrementamos el número
    numero++;
    //actualizamos ese número
    texto.innerText = numero;
}

/*creamos una nueva función
    que llame y llame nuevamente u otra vez......
    a la función timer
*/
function iniciar()
{
    if( flag == 0 ){
        intervalo = setInterval( timer, 1 );
        flag = 1;
    }
}
function detener()
{
    clearInterval( intervalo);
    flag = 0;
}
function resetTimer()
{
    numero = 0;
    texto.innerText = numero;
}