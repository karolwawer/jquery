$(document).ready(function(){
  showHide();  
})

function showHide(){
   $('#first').css('background','green').hide('slow').show(3000);
}
console.log($('#first'));
console.log($('#first .link'));

