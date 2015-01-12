var Controlador = function() {
    this.init = function() {
        $("#opcion1").click(function() {
            $("#index").fadeOut();
            setTimeout(function (){
                con.opciones('1');
            },500);
        });
        $("#opcion6").click(function() {
            $("#index").fadeOut();
            setTimeout(function (){
                con.opciones('6');
            },500);
        });
    };
    this.opciones = function(num) {
        for (var i = 1; i <= 6; i++) {
            if (i == num) {
                $("#pagina" + i).fadeIn();
            }
        }
    };
};
var con = new Controlador();

$(document).ready(function() {
    con.init();
});
