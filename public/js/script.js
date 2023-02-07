btn.addEventListener('click', function() {

    // gerar um numero random entre 1 e 905
    numberPokemon = Math.floor(Math.random()*905)

    // url padrão para pesquisa, caso nada for digitado
    urlApi = "https://pokeapi.co/api/v2/pokemon/"+numberPokemon
    //captura o valor digitado no input
    entrada = document.getElementById('entrada').value

    // caso não tenha digitado nada no input vai ser definido a URL de um pokemon aleatorio
    if(entrada != ''){
        urlApi = "https://pokeapi.co/api/v2/pokemon/"+entrada.toLowerCase();
    }

    // requisição da api e a modificação das tags para as informações recebidas da api
    $.when(
        $.getJSON(urlApi),
        $.getJSON('public/js/type.json')
    )
        .done(function( msg, data ) {
            
            //pegando a imagem do pokemon de um db da internet
            var imgPoke = 'https://img.pokemondb.net/artwork/'+msg[0]['name']+'.jpg' 
            
            $('#card').attr('style','display:inline;')
            $('#titleCard').text('N° ID: ' + msg[0]['id'] + ' | ' + msg[0]['name'].toUpperCase())
            $('#imgCard').attr('src',imgPoke)
            //$('#imgCard').attr('src',msg['sprites']['other']['home']['front_default'])
            $('#typeOne').text(msg[0]['types'][0]['type']['name'])
            $('#typeOne').attr('class','list-group-item '+ msg[0]['types'][0]['type']['name'])
            if(msg[0]['types'].length > 1 ){
                $('#typeTwo').text(msg[0]['types'][1]['type']['name'])
                $('#typeTwo').attr('style','display: inherite;')
                $('#typeTwo').attr('class','list-group-item '+ msg[0]['types'][1]['type']['name'])
            }else{
                $('#typeTwo').text('')
                $('#typeTwo').attr('style','display: none;')

            }

            $('#statusOne').text(msg[0]['stats'][5]['base_stat'])
            $('#statusTwo').text(msg[0]['stats'][1]['base_stat'])
            $('#statusThree').text(msg[0]['stats'][2]['base_stat'])
            $("#vantagem").text('Vantagem: '+data[0][((msg[0]['types'][0]['type']['name']))][0]['vantagem'])
            $("#desvantagem").text('Desvantagem: '+data[0][((msg[0]['types'][0]['type']['name']))][0]['desvantagem'])
            $("#imunidade").text('Imunidade: '+data[0][((msg[0]['types'][0]['type']['name']))][0]['imunidade'])
            

            
        });

});