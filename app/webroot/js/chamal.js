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
        
        /* Function My look*/
        $("#inscribete").click(function() {
            $("#pagina1").fadeOut();
            setTimeout(function (){
                con.opciones('7');
            },500);
        });
        $("#pop-up").click(function() {
            $("#pop-up").fadeOut();
        });
    };
    this.opciones = function(num) {
        for (var i = 1; i <= 7; i++) {
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
