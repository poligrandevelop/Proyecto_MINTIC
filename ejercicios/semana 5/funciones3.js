//parametros res


//operador spread

const arreglo1= [1,2,3,4,5,6,7,8,9];
const arreglo2= [10,11,12,13,14,15,16,17,18];
console.log(arreglo1,arreglo2);

const arre = [...arreglo1, ...arreglo2];
console.log(arre);


const arreglo3= [1,2,3,4,5,6,7,8,9];
const arreglo4= [10,11,12,13];

console.log([0,...arreglo3,'hola mundo',...arreglo4, 'prueba', 19,20,21]);