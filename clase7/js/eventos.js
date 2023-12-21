/*
onclick="texto.innerText='hiciste click!'"
onmouseover="texto.innerText='mouse sobre'"
onmouseout="texto.innerText='reposo'"
*/
//ubicamos elementos dentro del DOM
const boton = document.querySelector('#boton');
const texto = document.querySelector('#texto');
const caja = document.querySelector('#caja');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

div1.style.margin = '16px';
div1.style.backgroundColor = 'hsl(100, 20%, 50%)';
div2.style.margin = '16px';
div2.style.backgroundColor = 'hsl(100, 20%, 50%)';


// .addEventListener( 'evento', acción )
boton.addEventListener(
        'click',
        function()
        {
            texto.innerText = 'hiciste click!';
        }
);
boton.addEventListener(
        'mouseover',
        function()
        {
            texto.innerText='mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        () => {
            texto.innerText='mouse fuera';
        }
);


/* sucede sólo en el contenedor */
caja.addEventListener(
    'mouseenter',
    ()=>{
        console.log('mouseEnter!');
    }
)
// sucede en el contenedor y además en los elementos contenidos
caja.addEventListener(
    'mouseover',
    ()=>{
        console.log('mouseOver!');
    }
);
// burbujeo o bubbling