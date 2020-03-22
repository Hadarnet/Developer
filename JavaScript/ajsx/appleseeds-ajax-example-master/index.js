

$('#mybtn').click(() => {

    console.log('started click');
    $('#mydiv').html('<h4>Loading...</h4>');
    
    $.getJSON('https://restcountries.eu/rest/v2/all',
    
    (res) =>{
        res.filter(function(index){
            return(`${index.name} ${index.capital}`);
            
        })

            $('#mydiv').html(res)

    }

    );

    console.log('ended click');

})