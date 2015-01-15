var Controlador = function() {
    this.init = function() {
        $("#opcion1").click(function() {
            $("#index").fadeOut();
            setTimeout(function() {
                con.opcionesIn('1');
            }, 500);
        });
        $("#opcion6").click(function() {
            $("#index").fadeOut();
            setTimeout(function() {
                con.opcionesIn('6');
            }, 500);
        });

        /* Function My look*/
        $("#inscribete").click(function() {
            $("#pagina1").fadeOut();
            setTimeout(function() {
                con.opcionesIn('7');
            }, 500);
        });
        $("#pop-up").click(function() {
            $("#pop-up").fadeOut();
        });

        /* Boton volver about*/
        $("#volver-about").click(function() {
            $("#pagina6").fadeOut();
            setTimeout(function() {
                $("#index").fadeIn();
            }, 500);
        });
        
        /* Boton volver about*/
        $("#volver-eventos").click(function() {
            $("#pagina1").fadeOut();
            setTimeout(function() {
                $("#index").fadeIn();
            }, 500);
        });
        
        /* Boton volver mi look*/
        $("#volver-mi-look").click(function() {
            $("#pagina7").fadeOut();
            setTimeout(function() {
                $("#index").fadeIn();
            }, 500);
        });
        /* Boton criterios sustentables */
        $("#boton-criterios").click(function() {
            $("#pagina7").fadeOut();
            setTimeout(function() {
                $("#pagina6").fadeIn();
            }, 500);
        });
        
        /* Animacion meses */
        $(".left").click(function() {
            con.animacionMeses('');
        });
        $(".right").click(function() {
            con.animacionMeses('');
        });
    };
    
    this.animacionMesesDown = function (){
        for (var i = 1; i <= 12; i++) {
            if (i == num) {
                $("#fecha" + i).fadeIn();
            }
        }
    };
    this.animacionMesesUp = function (){
        for (var i = 1; i <= 12; i++) {
            if (i == num) {
                $("#fecha" + i).fadeIn();
            }
        }
    };
    this.opcionesIn = function(num) {
        for (var i = 1; i <= 7; i++) {
            if (i == num) {
                $("#pagina" + i).fadeIn();
            }
        }
    };
    this.opcionesOut = function(num) {
        for (var i = 1; i <= 7; i++) {
            if (i != num) {
                $("#pagina" + i).fadeIn();
            }
        }
    };
};
var con = new Controlador();

$(document).ready(function() {
    con.init();
});
