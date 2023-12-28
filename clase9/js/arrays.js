const texto = document.querySelector('#texto');
/*  array de marcas  */
const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Tommy','Hollister',
                'Kingpin','Gola','Old Navy'
              ];
    console.log( marcas );
//const numeros = [ 1, 2, 3, 5, 7, 9 ];
    //console.log( numeros );

/* imprimimos dentro del span */
// texto.innerText = marcas; // todo el array
//texto.innerText = marcas[0]+' '+marcas[1]+' '+marcas[2];
texto.innerText = `${marcas[0]} ${marcas[1]} ${marcas[2]}`;

marcas.push('Aeroflot');
console.log( marcas );