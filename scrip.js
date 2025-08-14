// Acción del botón
document.getElementById("botonClick").addEventListener("click", function() {
    alert("¡Hola! Gracias por visitar mi web 😃");
});

// Validación simple del formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita recargar la página
    alert("Formulario enviado correctamente 👍");
});