$(document).ready(function() {
  // Funcionalidad de desplazamiento suave
  $('a[href^="#"]').click(function(event) {
    event.preventDefault(); // Evita el salto predeterminado

    const destino = $(this.getAttribute('href')); 
    if (destino.length) { // Comprueba si el elemento destino existe
      $('html, body').animate({
        scrollTop: destino.offset().top - 100 // Desplazamiento
      }, 500); // Duración de la animación milisegundos
    }
  });
});
