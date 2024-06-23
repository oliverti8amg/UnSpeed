// Archivo script.js
document.addEventListener('DOMContentLoaded', function() {
    const botonesCarrito = document.querySelectorAll('.añadir-carrito');

    botonesCarrito.forEach(boton => {
        boton.addEventListener('click', function() {
            const link = boton.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
