const cubo = document.getElementById('cubo');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // Rotación en el eje X
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25; // Rotación en el eje Y
    cubo.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

document.addEventListener('mouseenter', () => {
    cubo.style.transition = 'none'; // Sin transición al entrar
});

document.addEventListener('mouseleave', () => {
    cubo.style.transition = 'transform 0.5s ease'; // Transición suave al salir
    cubo.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Regresa a la posición original
});
