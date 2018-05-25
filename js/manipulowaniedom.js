console.log($('p').text());
$('p').text('Zmieniono tekst wewnątrz paragrafu');

console.log($('p').html());
$('p').html('<span>Dodano span wewnątrz paragrafu</span>');

$('#par').append('<span id="append">append</span>');


$('#par').prepend('<span id="prepend">prepend</span>');

$('#par').after('<p id="after">after</p>');
$('#par').before('<p id="before">before</p>');

$('#par').empty();
$('#before').remove();

console.log($('#form input').val());
$('#form input').val('zmienione value');

$('#form').addClass('klasa1 klasa2 klasa3');
$('#form').removeClass('klasa2');

$('#form input').each(function(index, element){
    console.log(element.value);
})

$('#linki a').css('text-decoration', 'none');
$('#find').css('background-color', 'yellow').find('p').each(function(){
    console.log($(this).text());
})