$(function() {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('#botonCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
    });
    $('h4').on('dblclick', function() {
        $(this).css({
            "color": "#ff0000"
        });
    });
    $('.desaparecer').click(function() {
        $('.aparece-desaparece').toggle();
    });
});