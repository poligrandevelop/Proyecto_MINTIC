let num1 = parseFloat(prompt('Ingrese num 1'));
let num2 = parseFloat(prompt('Ingrese num 2'));
let num3 = parseFloat(prompt('Ingrese num 3'));

if (num1 > num2 && num1 > num3) {
    alert('El número mayor es ' + num1);
} else if (num2 > num1 && num2 > num3) {
    alert('El número mayor es ' + num2);
} else if (num3 > num1 && num3 > num2) {
    alert('El número mayor es ' + num3);
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert('Hay números iguales.');
} else {
    alert('Se ingresaron valores incorrectos.');
}



let res= (n1 > n2) ? n1:n2;

alert('el numero mayor es:', res );

