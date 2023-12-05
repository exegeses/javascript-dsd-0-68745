// ubicamos elementos dentro del DOM
  //elementos únicos
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const primero = document.querySelector('#primero'); 

//varios elementos 
  const elementosLista = document.querySelectorAll('li');
  const parrafos = document.querySelectorAll('.parrafo');
  const articulos = document.querySelectorAll( '#primero article' );
    console.log(articulos);

//controlamos
  body.style.backgroundColor = 'hsl(120, 25%, 20%)';
  h1.innerText = 'soy el h1';

  primero.style.backgroundColor = 'hsl(120, 25%, 10%)';
  primero.style.margin = '20px';

  articulos[0].style.fontSize = '32px';

  elementosLista[2].style.backgroundColor = 'hsl(120, 25%, 10%)';


/* maneras anteriores de seleccionar elementos */  
const segundo = document.getElementById('segundo');
segundo.style.padding = '24px';

/* 
const p = document.getElementsByClassName('parrafo')
p[1]......

const lis = document.getElementsByTagName('li');
lis[2]....

*/