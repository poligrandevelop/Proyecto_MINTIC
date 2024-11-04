function mostrarFactorial() {

    let num = parseInt(prompt('Ingresa un número para calcular su factorial:'));
    let result = 1; 
    let numMultiplicados = ""; 
    if (num<1) {
        alert("El numero debe ser mayor a 1");
        
    }else{
        for (let i = 2; i <= num; i++) {
            result *= i;
            numMultiplicados += (numMultiplicados ? " * " : "") + i;
        }
        
        alert("Los números que se multiplicaron son: " + numMultiplicados);
        alert("El factorial de " + num + " es " + result);
        return result;
    }
}


