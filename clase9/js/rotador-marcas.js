// ubicamos elementos dentro del DOM
const span = document.querySelector('#rotador-marcas span');
const imagenes = document.querySelectorAll('#rotador-marcas img');
    //botones
    const btnAnterior = imagenes[0];
    const btnSiguiente = imagenes[1];
console.log(imagenes);

/*### array de marcas ###*/
const marcas = [
    'Hermès','Zara','Boss',
    'Aeropostale','Tommy','Hollister',
    'Kingpin','Gola','Old Navy'
  ];
const largo = marcas.length;

/* estado inicial */  
let llave = 4;
span.innerText = marcas[llave];

btnAnterior.addEventListener(
        'click',
        ()=>{
            llave--; //llave = llave - 1;
            if( llave < 0 ){
                llave = largo - 1;
            }
            span.innerText = marcas[llave];
        }
);
btnSiguiente.addEventListener(
        'click',
        ()=>{
            llave++; //llave = llave + 1;
            if( llave == largo ){
                llave = 0;
            }
            span.innerText = marcas[llave];
        }
);