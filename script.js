document.addEventListener("DOMContentLoaded", function() {
    const carruseles = document.querySelectorAll('.carrusel');
    carruseles.forEach(carrusel => {
        let imagenes = carrusel.querySelectorAll('img');
        let indice = 0;
        imagenes[indice].classList.add('activa');

        setInterval(() => {
            imagenes[indice].classList.remove('activa');
            indice = (indice + 1) % imagenes.length;
            imagenes[indice].classList.add('activa');
        }, 4000); 
    });
});
