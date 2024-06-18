$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $('button').click(function() {
        const objetivo = $('#definir-objetivo').val();
        if (objetivo.trim() !== "") { 
            const novoobjetivo = $('<li></li>').text(objetivo);
            novoobjetivo.appendTo('ul');
            $('#definir-objetivo').val('');
        }
    });

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('finalizado');
    });

});




