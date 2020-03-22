
$('#mybtn').click(() => {

    console.log('started click');
    $('#mydiv').html('<h4>Loading...</h4>');
    
    $.getJSON('https://restcountries.eu/rest/v2/all',
        (res) =>
            $('#mydiv').html(res.joke)
    );

    console.log('ended click');

})




