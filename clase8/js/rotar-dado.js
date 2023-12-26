// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');
/* 
    generar un número aleatorio
    entre 1 y 6 (SIN DECIMALES)

    insertar dentro del contenedor #caja
    una imagen que corresponda con la cara del dado
    según el número generado

    reproducir audio
*/
function getNumero()
{
    let numeroAleatorio = Math.random();
    // un número aleatorio entre 0 ~ 1
    console.log('numeroAleatorio: ', numeroAleatorio);

    let numeroPor5 = numeroAleatorio * 5;
    // Al multiplicar por 5 vamos a obtener 
    // un número aleatorio entre el 0 y el 5
    console.log('numeroPor5: ', numeroPor5);

    let numero = Math.round( numeroPor5 );  
    console.log('numero: ', numero);

    //return numero = Math.round( Math.random()*5 ) + 1
    return numero + 1;
}
function mostrarImagen( numero )
{
    //caja.innerHTML = `<img src="red/dice-${numero}.png">`;
    caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
}
function playAudio()
{
    let sonido = new Audio('audio/dice.mp3');
    sonido.play();
}

boton.addEventListener(
        'click',
        ()=>{
            let numero = getNumero();
            mostrarImagen( numero );
            playAudio();
        }
);