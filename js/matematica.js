// cerrar Sesion
var btnS= document.getElementById('cerrarSession');

btnS.addEventListener('click',function(){
    setTimeout(function(){
        location.href ="login.html";
    }, 1000);
});


$(document).ready(function () {

    $("#enteros").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'initial'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#funcion").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'initial'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#teorema").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'initial'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#negativos").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'initial'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#variables").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'initial'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#fracciones").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'initial'});
        $("#vsuperficies").css({'display':'none'});
        
    });

    $("#superficies").click(function () { 
       
        $("#ventrada").css({'display':'none'});
        $("#vnumeros").css({'display':'none'});
        $("#vfunciones").css({'display':'none'});
        $("#vteorema").css({'display':'none'});
        $("#vnegativos").css({'display':'none'});
        $("#vvariables").css({'display':'none'});
        $("#vfracciones").css({'display':'none'});
        $("#vsuperficies").css({'display':'initial'});
        
    });

});