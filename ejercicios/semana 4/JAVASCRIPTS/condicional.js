let nota1 = parseFloat(prompt('Ingrese nota 1'));
let nota2 = parseFloat(prompt('Ingrese nota 2'));
let nota3 = parseFloat(prompt('Ingrese nota 3'));

let promedio = (nota1 + nota2 + nota3) / 3;
alert('Este es su promedio final: ' + promedio);

if (promedio > 3) {
    alert('Pasó la materia');
} else if (promedio > 2 && promedio <= 3) {
    alert('Debe habilitar');
} else {
    alert('Perdió la materia');
}
