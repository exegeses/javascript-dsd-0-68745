// ubicamos elemento dentro del DOM
const frase = document.querySelector('#frase');
/*
   hacer una pregunta al usuario
   - el usuario va a responder
   almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccinoado ganó el mundial Qatar 2022');

//condicional
if( respuesta.toLowerCase() == 'argentina' ){
    frase.innerHTML = '<img src="imgs/ok.png">';
}
else {
    frase.innerHTML = '<img src="imgs/error.png">';
}