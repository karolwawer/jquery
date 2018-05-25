$(document).ready(function(){
    $('#find').fadeOut(4000).fadeIn(4000);
    slide();
})

$(window).scroll(function(){
   showScrolled(); 
})

function showScrolled(){
    console.log($(this).scrollTop());
}

function slide() {
    var btn_1 = $('#btn-1');
    var btn_2 = $('#btn-2');
    
    btn_1.click(function() {
        $('#find').slideUp();
    })
    btn_2.click(function() {
        $('#find').slideDown();
    })
}