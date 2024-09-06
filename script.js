document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector('.carrusel');
    let index = 0;

    function cambiarImagen() {
        index = (index + 1) % carrusel.children.length;
        carrusel.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(cambiarImagen, 4000); // 4000 milisegundos = 4 segundos
});
