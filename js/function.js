/*


LUIS VILCHES ABARCA
lvilches21@gmail.com


*/
// se declaran las varibles globales
//variable de validacion de email
    var valmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
var ingresar = $("#ingresar");
var correo = $("#correo");
var password = $("#password");
var ocultar = $(".oc");
var user = $("#user");
var close = $("#closeLogin");
var enviar = $("#send");
var clean = $("#clean");
var mail = $("#mail");
var mensaje = $("#mensaje");
var nombre = $("#name");
var error = $("#error");
var msg = $("#msg");
var ok = $("#success");
var ubicacion = $("#ubicacion");
var ubi = $("#ubi");
var inicio = $("#inicio");
var contacto = $("#contacto");
var arriba = $("#irarriba");
var cerrar = $("#close");
var popup = $("#popup");
var sesion = $("#sesionOk");
var userIcon = $("#userIcon");

//----------------------------------

$(document).ready(function(){

    user.hide();
    close.hide();
    error.hide();
    ok.hide();
    irArriba();
    cerrar.hide();
    sesion.hide();
    userIcon.hide();



    ingresar.click(function(){

        if (correo.val() == "correo@mail.com" && password.val() == "usuario") {

            var log = correo.val();
            sesion.html("Bienvenido " + log).fadeIn(1000).delay(4000).fadeOut(1000);
            popup.fadeOut(400);
            login(log);

        }else{

            popup.fadeIn(1000).delay(4000).fadeOut(1000 );
        };


    });

    close.click(function(){
        closeLogin();
    });

    enviar.click(function(){
        validar();
    });

    clean.click(function(){
        limpiar();
    });

    ubicacion.click(function(){
        //var posicion = $("#ubi").offset().top;
        desplazarDown(ubi);
    });

    contacto.click(function(){
        //var posicion = $("#ubi").offset().top;
        desplazarDown(ubi);
    });

    inicio.click(function(){
        desplazarUp(0);
    });

    arriba.click(function(){
        desplazarUp(0);
    });





    $('[data-toggle="popover"]').popover();
});


// FUNCIONES----------------------------------------------------------------------


function login(correo){
    // ocultamos el form de login
    ocultar.hide();
    // mostramos la bienvenida
    user.delay(5000).fadeIn(1000).html(correo);
    userIcon.delay(5000).fadeIn(1000);
    close.delay(5000).fadeIn(1000); 

};

function closeLogin(){
    // cerramos la sesision ocultando la bienvenida y el boton de cerrar sesion
    user.hide();
    close.hide();
    userIcon.hide();
    ocultar.fadeIn(2000);
    correo.val("");
    password.val("");

};

function validar(){

    if (nombre.val() == "") {
        nombre.css({border: '2px solid #ff9999'});
        error.fadeIn();
        return false;
    }else{

        nombre.css({border: '2px solid #445822'});
        error.fadeOut();

        if (mail.val() == "" || !valmail.test(mail.val())) {
            mail.css({border: '2px solid #ff9999'});
            error.fadeIn();
            return false;
        }else{
            mail.css({border: '2px solid #445822'});
            error.fadeOut();

            if (mensaje.val() == "") {
                mensaje.css({border: '2px solid #ff9999'});
                error.fadeIn();
                return false;
            }else{
                mensaje.css({border: '2px solid #445822'});
                error.fadeOut();
                ok.fadeIn();
                limpiar();
            };
        };
    };
};

function limpiar(){
    nombre.val("").css("border" , "");
    mail.val("").css("border" , "");
    mensaje.val("").css("border" , "");
    error.fadeOut();
}


function desplazarDown(ubicacion){
    var posicion = ubicacion.offset().top;
    event.preventDefault()
    $("html, body").animate({
        scrollTop: posicion
    }, 2000);
};

function desplazarUp(position){
    event.preventDefault()
    $("html, body").animate({
        scrollTop: position
    }, 2000);
};

function irArriba(){
    $(document).on("scroll", function(){
        var desplazamientoActual = $(document).scrollTop();
        var controlArriba = $("#irarriba");
        console.log("Estoy en " , desplazamientoActual); 
        if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
            controlArriba.fadeIn(500);
        }
        if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
            controlArriba.fadeOut(500);
        }
    });
};