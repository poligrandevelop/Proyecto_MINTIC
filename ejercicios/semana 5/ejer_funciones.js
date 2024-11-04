const flechaSuma = (a, b) => a + b;

console.log(flechaSuma(2, 3)); // 5


function tradicionalSuma(a, b) {
    return a + b;
}

console.log(tradicionalSuma(2, 3)); // 5


function operacionConCallback(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

operacionConCallback(2, 3, (resultado) => {
    console.log(`Resultado con callback: ${resultado}`); // Resultado con callback: 5
});



function operacionConPromesa(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Error: los argumentos deben ser números.');
        }
    });
}

operacionConPromesa(2, 3)
    .then(resultado => console.log(`Resultado con promesa: ${resultado}`)) // Resultado con promesa: 5
    .catch(error => console.error(error));


    async function operacionAsync(a, b) {
        try {
            const resultado = await operacionConPromesa(a, b);
            console.log(`Resultado con async/await: ${resultado}`); // Resultado con async/await: 5
        } catch (error) {
            console.error(error);
        }
    }
    
    operacionAsync(2, 3);


