let personas=['Ana','Pedro','Juan','María'];
console.log(personas);

console.log(personas.push('Ana'))
console.log(personas);

console.log(personas.length);// ver la longitud del arreglo
console.log(length);

console.log(personas.sort())
console.log(personas);


console.log(personas.pop())// elimina el ultimo del arreglo
console.log(personas);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = numeros.map(e => e + 3); // Sumar 3 a cada elemento del array
console.log(res);

const nombres_personas = ['ANA', 'pedro', 'juan', 'maría'];

const mapear = nombres_personas.map(function(elemento, i) {
    return { index: i, value: elemento.toLowerCase() };
});

console.log(mapear);
console.log(nombres_personas);


let num=[1,2,3,4,5,6,7,8,9];
const result= num.filter(e => e === 6 || e === 3)
console.log(result)

const frutas=['lulo','mora','tomate','piña'];
frutas.forEach(e => console.log(e)
);

const frutas2=['lulo','fresa','manzana','papaya', 'melocoton','papaya'];
const res2 = frutas2.filter(value => value.length <5);
console.log(res2)

const num2 =[1,2,3,4,5,6,7,8,9,10,11,12];
const imprimir = num2.find(e => e > 5)
console.log(imprimir);

const data=[
    {
        name:'Ana',
        edad: 0,
    },
    {
        name:'Maria',
        edad: 20,
    },
    {
        name:'Mateo',
        edad: 40,
    },
    {
        name:'Juan',
        edad: 5,
    },

];
console.log(data);
const dataUser= data.find(i => i.name =="Mateo");
console.log(dataUser);


const desNum=[3,5,8,2,4,7,2,9,1,7,4]

const desNums= desNum.sort((a,b) => a>b ? 1 : -1);
console.log(desNums);

const desNumbs= desNum.toSorted((a,b) => a>b ? 1 : -1);
console.log(desNumbs);


const desLtrs=['a','r','c','s','t','h','g'];
console.log(desLtrs);
const desLts= desLtrs.toSorted((a,b) => a>b ? -1 : 1);
console.log(desLts);


//some: devuelve un true o false

const numS=[1,2,3,4,5,8,4,9,6,7,4,85,2,14];
const rta = numS.some(i => i < 5);
console.log(rta);

const rta2 = numS.every(i => i > 14);
console.log(rta2);

console.log(numS.includes(5));

const ltrs=['d','s'];
const nums=[1,4];
const union= ltrs.concat(nums);
console.log(union);

const rta3 = desLtrs.slice(1,10);
console.log(rta3);

const rta4 = numS.slice(2,8);
console.log(rta4);

const rta5 = desLtrs.splice(1, 0, 'b');
console.log(rta5);// al no eliminar nada se muestra en vacio
console.log(desLtrs); // al imprimir nuevamnete el arreglo inicial se muestra la nueva insercion