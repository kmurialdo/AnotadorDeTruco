$(document).ready(function() {
    var varacuanto = 0;
    puntos1 = 0;
    puntos2 = 0;
    sejuegaA = 0;



    console.log("Arranca");
    $("#apantalla2").on('click', pasarA2);
    $("#apantalla1").on('click', pasarA1);
    $("#a24").on('click', function() { resaltar(1) });
    $("#a30").on('click', function() { resaltar(2) });
    $("#sumae1").on('click', sumar1);
    $("#sumae2").on('click', sumar2);
    $("#restae1").on('click', restar1);
    $("#restae2").on('click', restar2);
    //$(".fosf1").on('click', dibujafosf1);
    /*$(".fosf2").on('click', dibujafosf2);*/

    /*funciones*/
    function pasarA2() {
        $("#pant1").removeClass('visible').addClass('oculto');
        $("#pant2").removeClass('oculto').addClass('visible');

        if ($("#a24").hasClass('btngris') && $("#a30").hasClass('btngris')) {
            alert("¿A cuánto se juega?");
            $("#pant2").removeClass('visible').addClass('oculto');
            $("#pant1").removeClass('oculto').addClass('visible');

        } else {
            if ($('#a24').hasClass('btn')) {
                sejuegaA = 24;
                console.log("Se juega a " + sejuegaA);
            } else {
                sejuegaA = 30;
                console.log("Se juega a " + sejuegaA);
            }
        }
        $("#e1p2").val(($("#equipo1").val()));
        $("#e2p2").val(($("#equipo2").val()));
        $("#total").text("a " + sejuegaA)


    }

    function pasarA1() {
        $("#pant2").removeClass('visible').addClass('oculto');
        $("#pant1").removeClass('oculto').addClass('visible');
        $(".ie1").attr('src', 'img/0.png');
        $(".ie2").attr('src', 'img/0.png');
        $("#equipo1").val("");
        $("#equipo2").val("");
        $("#equipo1").attr('placeholder', 'Equipo 1');
        $("#equipo2").attr('placeholder', 'Equipo 2');
        $(".acuanto").removeClass('btn').addClass('btngris');
        $("#e1p2puntos").text("00");
        $("#e2p2puntos").text("00");
        puntos1 = 0;
        puntos2 = 0;
    }

    function resaltar(n) {
        if (n == 1) {
            $("#a24").removeClass('btngris').addClass('btn');
            $("#a30").removeClass('btn').addClass('btngris');
            varacuanto = 24;
            console.log(varacuanto);
        } else {
            $("#a30").removeClass('btngris').addClass('btn');
            $("#a24").removeClass('btn').addClass('btngris');
            varacuanto = 30;
            console.log(varacuanto);
        }

    }

    function sumar1() {

        if (puntos1 < sejuegaA) {
            puntos1 += 1;
            //console.log("e1 "+puntos1);
            $("#e1p2puntos").text(puntos1);
            evaluar = puntos1;

            $(".ie1").attr('src', 'img/0.png');
            for (var i = 1; i <= 6; i++) {
                if (evaluar >= 5) {
                    if (evaluar >= 5 && i == 3 && sejuegaA == 24) {
                        console.log("evaluar= " + evaluar + "//i= " + i);
                        $("#e1_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                    } else {
                        $("#e1_" + i).attr('src', 'img/5.png');
                        evaluar -= 5;
                    }

                    //console.log("var evaluar: "+evaluar+"var i: "+i);
                } else {
                    if (evaluar >= 2 && i == 3 && sejuegaA == 24) {
                        console.log("entro en el if de 24");
                        $("#e1_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                        //console.log("evaluar= "+evaluar+"//i= "+i);
                    } else {

                        $("#e1_" + i).attr('src', 'img/' + evaluar + '.png');
                        evaluar -= evaluar;

                    }
                }
            }

        } else {
            console.log("Alguien Ganó");
        }

        if (puntos1 == sejuegaA) {
            alert("Ganó " + $("#e1p2").val());
        }

    }

    function sumar2() {

        if (puntos2 < sejuegaA) {
            puntos2 += 1;
            //console.log("e1 "+puntos1);
            $("#e2p2puntos").text(puntos2);
            evaluar = puntos2;

            $(".ie2").attr('src', 'img/0.png');
            for (var i = 1; i <= 6; i++) {
                if (evaluar >= 5) {
                    if (evaluar >= 5 && i == 3 && sejuegaA == 24) {
                        console.log("evaluar= " + evaluar + "//i= " + i);
                        $("#e2_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                    } else {
                        $("#e2_" + i).attr('src', 'img/5.png');
                        evaluar -= 5;
                    }

                    //console.log("var evaluar: "+evaluar+"var i: "+i);
                } else {
                    if (evaluar >= 2 && i == 3 && sejuegaA == 24) {
                        console.log("entro en el if de 24");
                        $("#e2_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                        //console.log("evaluar= "+evaluar+"//i= "+i);
                    } else {

                        $("#e2_" + i).attr('src', 'img/' + evaluar + '.png');
                        evaluar -= evaluar;

                    }
                }
            }

        } else {
            console.log("Alguien Ganó");
        }

        if (puntos1 == sejuegaA) {
            alert("Ganó " + $("#e2p2").val());
        }

    }

    function restar1() {

        if (puntos1 > 0) {
            puntos1 -= 1;
            //console.log("e1 "+puntos1);
            $("#e1p2puntos").text(puntos1);
            evaluar = puntos1;

            $(".ie2").attr('src', 'img/0.png');
            for (var i = 1; i <= 6; i++) {
                if (evaluar >= 5) {
                    if (evaluar >= 5 && i == 3 && sejuegaA == 24) {
                        console.log("evaluar= " + evaluar + "//i= " + i);
                        $("#e1_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                    } else {
                        $("#e1_" + i).attr('src', 'img/5.png');
                        evaluar -= 5;
                    }

                    //console.log("var evaluar: "+evaluar+"var i: "+i);
                } else {
                    if (evaluar >= 2 && i == 3 && sejuegaA == 24) {
                        console.log("entro en el if de 24");
                        $("#e1_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                        //console.log("evaluar= "+evaluar+"//i= "+i);
                    } else {

                        $("#e1_" + i).attr('src', 'img/' + evaluar + '.png');
                        evaluar -= evaluar;

                    }
                }
            }

        } else {
            alert("No se puede restar más");
        }


    }

    function restar2() {
        if (puntos2 > 0) {
            puntos2 -= 1;
            //console.log("e1 "+puntos1);
            $("#e2p2puntos").text(puntos2);
            evaluar = puntos2;

            $(".ie2").attr('src', 'img/0.png');
            for (var i = 1; i <= 6; i++) {
                if (evaluar >= 5) {
                    if (evaluar >= 5 && i == 3 && sejuegaA == 24) {
                        console.log("evaluar= " + evaluar + "//i= " + i);
                        $("#e2_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                    } else {
                        $("#e2_" + i).attr('src', 'img/5.png');
                        evaluar -= 5;
                    }

                    //console.log("var evaluar: "+evaluar+"var i: "+i);
                } else {
                    if (evaluar >= 2 && i == 3 && sejuegaA == 24) {
                        console.log("entro en el if de 24");
                        $("#e2_" + i).attr('src', 'img/2.png');
                        evaluar -= 2;
                        //console.log("evaluar= "+evaluar+"//i= "+i);
                    } else {

                        $("#e2_" + i).attr('src', 'img/' + evaluar + '.png');
                        evaluar -= evaluar;

                    }
                }
            }

        } else {
            alert("No se puede restar más");
        }


    }

});