//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

const h1 = document.querySelector('h1');
let intervalo = '';

//declaramos función/nes de control
function cuentaRegresiva()
{
    //const final = new Date(2024, 0, 1);
    const final = new Date(2023, 11, 19, 12);
    const actual = new Date();

    //calculamos la diferencia de los eventos
        // expresada en milisegundos
    let diferencia = final - actual;
    console.log('diferencia: ', diferencia);

    /* convertimos a unidades de tiempo */
    //obtenemos el tiempo expresado en segundos (sin decimales)
    let segundos = Math.trunc( diferencia / 1000 );
    console.log('segundos: ', segundos);

    //obtenemos el tiempo expresado en minutos (sin decimales)
    let minutos = Math.trunc( segundos / 60 );
    console.log( 'minutos: ', minutos );

    //obtenemos el tiempo expresado en horas (sin decimales)
    let horas = Math.trunc( minutos / 60 );
    console.log('horas: ', horas);

    //obtenemos el tiempo expresado en dias (sin decimales)
    let dias = Math.trunc( horas / 24 );
    console.log( 'dias: ', dias );

    /* calculamos los tiempo restantes */
    horas = horas%24;
    console.log('horas: ', horas);
    minutos = minutos%60;
    console.log( 'minutos: ', minutos );
    segundos = segundos%60;
    console.log('segundos: ', segundos);

/*#############################
    detener cuando llegue a 0
    cambiar el texto del h1
  #############################
*/

    if(
            dias <= 0  &&
            horas <= 0  &&
            minutos <= 0 &&
            segundos <= 0
      ){
            h1.innerText = 'Oferta finalizada';
            dias = 0;
            horas = 0;
            minutos = 0;
            segundos = 0;
            clearInterval( intervalo );
    }


    /* agregarmos cero (0) inicial para dos dígitos */

    if ( dias < 10 ) {
        dias = '0' + dias;
    }
    if ( horas < 10 ) {
        horas = '0' + horas;
    }
    if ( minutos < 10 ) {
        minutos = '0' + minutos;
    }
    if ( segundos < 10 ) {
        segundos = '0' + segundos;
    }


    /* imprimimos en las span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

// invocamos a la función 
cuentaRegresiva();
// actualizamos el llamado a la función
intervalo = setInterval( cuentaRegresiva, 1000 );

