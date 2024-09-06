document.addEventListener("DOMContentLoaded", function() {
    const carruseles = document.querySelectorAll('.carrusel');

    carruseles.forEach(carrusel => {
        let imagenes = carrusel.querySelectorAll('img');
        let indice = 0;

        // Mostrar la primera imagen inicialmente
        imagenes[indice].classList.add('activa');

        setInterval(() => {
            // Ocultar la imagen actual
            imagenes[indice].classList.remove('activa');

            // Calcular el siguiente índice
            indice = (indice + 1) % imagenes.length;

            // Mostrar la siguiente imagen
            imagenes[indice].classList.add('activa');
        }, 4000); // 4000 milisegundos = 4 segundos
    });
});
