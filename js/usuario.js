var nombre_completo = document.getElementById("nombre_completo");
var telefono = document.getElementById("direccion");
var direccion = document.getElementById("direccion");
var email = document.getElementById("email");
var contraseña = document.getElementById("contraseña");
var fecha_nacimiento = document.getElementById("fecha_nacimiento");
var documento_identidad = document.getElementById("documento_identidad");
var estado_civil = document.getElementById("estado_civil");
var rol = document.getElementById("rol");
var genero = document.getElementById("genero");
var profesion = document.getElementById("profesion");
var Calificacion_estaurante = document.getElementById("Calificacion_estaurante");

function ValidarDatos() {
    if (nombre_completo=="" || telefono== "" || direccion== "" || email== "" || contraseña== "" || fecha_nacimiento == "" || documento_identidad == "" || estado_civil== "" || rol== "" || genero== "" || profesion== "" || Calificacion_estaurante== "") {
        console.log("Por favor, complete todos los campos.");
    } 
    else {
           if(nombre_completo != /[a-zA-Z]/){
            console.log("los datos son incorrectos.");
         }
        
    if (telefono.value.length () >8) {
        console.log("los datos son incorrectos.");
        }
    if (email.!= /[@]/) {
        console.log("los datos son incorrectos.");
        }
    
}