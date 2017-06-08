 $(".button-collapse").sideNav();

$("#nombre_usuario").text(localStorage.nombre);
$("#correo_usuario").text(localStorage.correo);

var enter = function(){
    
    localStorage.nombre = $("#first_name").val() + " " +$("#last_name").val(); 
    localStorage.correo = $("#email").val(); 
};
$("#enter_registro").click(enter);