$(document).ready(function () {
    // Hacer parpadear, rotar, crecer y desplazar el logo del footer
    setInterval(function () {
        $('.footer-logo').fadeOut(800, function () {
            $(this).css({
                'transform': 'scale(2.2) rotate(15deg)',
                'margin-left': '5%', // Desplazamiento hacia la derecha
                'transition': 'transform 5s ease' // Transición de escala y rotación
            });
        }).fadeIn(500, function () {
            $(this).css({
                'transform': 'scale(1) rotate(0deg)',
                'margin-left': '0px',
                'margin-top': '30px', // Desciende el logo
                'transition': 'transform 1s ease, margin-top 5s ease' // Transición de escala y desplazamiento
            });
        });
    }, 5000); // Parpadea, rota, crece y se desplaza cada 5 segundos
    

// Hacer parpadear, rotar, crecer y desplazar el logo del nav
setInterval(function () {
    $('.nav-logo').css({
        'transition': 'transform 2s, margin-left 2s' // Aseguramos que la transición esté antes del cambio
    }).fadeOut(300, function () {
        $(this).css({
            'transform': 'scale(2.2) rotate(-15deg)',
            'margin-left': '10px' // Desplazamiento hacia la izquierda
        });
    }).fadeIn(1500, function () { // Aumenta el tiempo de 'fadeIn' para que sea más lento
        $(this).css({
            'transform': 'scale(1) rotate(0deg)',
            'margin-left': '0px'
        });
    });
}, 20000); // Intervalo de 20 segundos

    
    // Hacer parpadear, rotar, crecer, subir y devolver el logo del nav cada 1 minuto
    setInterval(function () {
        // Fase 1: Hacer desaparecer el logo, girar 3 veces, escalar y subir
        $('.nav-logo').fadeOut(300, function () {
            $(this).css({
                'transform': 'scale(2.2) rotate(1080deg)', // Gira 3 veces (1080 grados) y agranda
                'margin-top': '-50px', // Sube el logo
                'transition': 'transform 4s ease, margin-top 4s ease' // Duración de 4 segundos para la rotación y subida
            });
        }).fadeIn(300);

        // Fase 2: Después de 4 segundos, devolver el logo a su tamaño original lentamente
        setTimeout(function () {
            $('.nav-logo').css({
                'transform': 'scale(1) rotate(0deg)', // Restablece el tamaño y rotación originales
                'margin-top': '0px', // Devuelve el logo a su posición original
                'transition': 'transform 10s ease, margin-top 10s ease' // Desciende lentamente (10 segundos)
            });
        }, 4000); // Empieza el retorno después de 4 segundos
    }, 60000); // Ejecuta la animación cada 60 segundos (1 minuto)

// efecto para el nombre de la empresa: 

setInterval(function () {
    $('.nav-company-name').fadeOut(4000, function () { // Desvanecimiento más lento (4 segundos)
        $(this).css({
            'transform': 'translateX(100%)', // Desplazar hacia la derecha
            'transition': 'transform 5s ease', // Desplazamiento más lento y suave
            'opacity': '0', // Hacer invisible
        });

        // Después de 5 segundos, hacer que reaparezca de forma paulatina
        setTimeout(function () {
            $('.nav-company-name').css({
                'transform': 'translateX(0)', // Restablecer posición lentamente
                'font-size': '2.5em', // Aumentar el tamaño del texto
                'font-weight': 'bold', // Agregar grosor al texto
                'text-shadow': '3px 3px 10px black', // Sombra negra más intensa
                'transition': 'transform 4s ease, font-size 3s ease, font-weight 3s ease', // Transiciones suaves
            }).fadeTo(4000, 1); // Reaparición más lenta (4 segundos)
        }, 5000); // Tiempo de espera antes de reaparecer (5 segundos)
    });
}, 4000); // Intervalo de 4 segundos


//Efectos para la mano que apunta al enlace linkenlin en el footer


$(document).ready(function() {
    // Animación del ícono de la mano
    setInterval(function() {
        $('.fa-hand-point-up').fadeOut(400).fadeIn(500);
    }, 4000); // Parpadea cada 2 segundos (ajustado)

    // Evento para rotar el ícono al pasar el ratón sobre él
    $('.fa-hand-point-up').on('mouseenter', function() {
        $(this).css({
            'transition': 'transform 0.5s',
            'transform': 'rotate(-90deg)'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'transition': 'transform 0.5s',
            'transform': 'rotate(0deg)' // Regresar a la posición original
        });
    });
});



    // Animación de los botones (botones del nav )
    setInterval(function () {
        $('.btn').each(function () {
            $(this).css('transform', 'scale(1.1) rotate(10deg)');
            setTimeout(() => {
                $(this).css('transform', 'scale(1) rotate(0deg)');
            }, 300); // Regresar al estado original después de 300 ms
        });
    }, 30000); // Efecto de crecimiento y rotación cada 3 segundos
});
