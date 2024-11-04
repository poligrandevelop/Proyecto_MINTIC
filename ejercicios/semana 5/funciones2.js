//Funcion tradicional con paso de parametros declarados dentro de la misma funcion

function sumar(c,d) {
    c=3;
    d=67;
    sumar= c+d;
    console.log('Esta es una suma', + sumar)
    
}
sumar();


//funcion tradicional con solicitud de parametros 

function suma(c, d) {
    return c + d;
}

console.log(suma(5, 6)); 

//funcion tradicional con solicitud de parametros por pantalla

function sum() {
    let c = Number(prompt("Ingrese el valor de c:"));
    let d = Number(prompt("Ingrese el valor de d:"));
    return c + d;
}
console.log( 'este es el resultado de la operacion: '+sum());


function calcularIVA() {
    const monto = parseFloat(prompt("Ingrese el monto para calcular el IVA:"));
    const iva = monto * 0.19; 
    let total = monto + iva; 

    console.log(`Monto original: ${monto}`);
    console.log(`IVA (19%): ${iva}`);
    console.log(`Total con IVA: ${total}`);
}

calcularIVA();

//funcion flecha

const multiplicar =(a,b)=>{
    return a*b
}
console.log(multiplicar(5,6))

//Funcion anónima

const dividir = function(a,b) {
    return a/b
    
}
console.log(dividir(10,2))