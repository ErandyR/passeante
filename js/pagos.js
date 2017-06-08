$(document).ready(function(){
  $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter:9 , // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right', // Displays dropdown with edge aligned to the left of button
        stopPropagation: true // Stops event propagation
      }
    );
  $(".opcionesPago").hover(profundidad);
  $('configuracionNotificaciones').hover(trabajandoEnEllo);


});
var profundidad = function(e){
    $(this).toggleClass( "z-depth-4");
}
var trabajandoEnEllo=function(){
  location.href="../coomingSoon.html"
}
