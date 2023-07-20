$(document).ready(function(){
    $('#carrossel-images').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({    
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true, 
                email: true
            },
            telefone:{
                required: true
            },
            mensagem:{
                required:true
            },
            veiculoDeinteresse:{
                required: false
            }
            
        },
        messages: {
                nome: 'Por favor, insira o seu nome'
            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposincorretos = validador.numberOfInvalids();
                console.log(camposincorretos)
                if(camposincorretos){
                    alert(`Existem ${camposincorretos} campos incorretos`)
                }
            }
    })
    $( '.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeveiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeveiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 800)
    })
})