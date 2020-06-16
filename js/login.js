
var usuarios = [
    {
        id:1,
        usuario:"gerald",
        contraseña:"0803"
    },
    {
        id:2,
        usuario:"cristobal",
        contraseña:"123456"
    },
    {
        id:3,
        usuario:"marcelo",
        contraseña:"654321"
    },
    {
        id:4,
        usuario:"edgardo",
        contraseña:"1234"
    },
];


//validar login
document.getElementById('btnlog').addEventListener('click',function(){
    console.log('click');
    let usuario = document.getElementById('txtusulog').value;
    let contraseña = document.getElementById('txtconlog').value;
    let res = false;
    for (const usu in usuarios) {
        if (usuario ===usuarios[usu].usuario && contraseña === usuarios[usu].contraseña) {
            res = true;
        }
    }
    if (res == true) {
        setTimeout(function(){
                location.href ="inicio.html";
            }, 1000);
    }else{
        alert('Datos Erroneos');
    }
    
});

