var usuario = document.getElementById("user");
var contraseña = document.getElementById("password");
var error = document.getElementById("error");
error.style.color = "red";
var expresion = /\w + @\.+[a-z]/;


function enviarFormulario (){
    console.log("Enviando formulario");

    var mensajesError = [];

    if (usuario.value === ""){
        mensajesError.push("Ingresa tu usuario");
    }

    if (!expresion.test(usuario.value) ){
        mensajesError.push("Incorrecto, verifique su usuario");
    }

    if (contraseña.value === ""){
        mensajesError.push("Ingresa tu contraseña");
    }

    

    error.innerHTML = mensajesError.join(", ");

    return false;
}









