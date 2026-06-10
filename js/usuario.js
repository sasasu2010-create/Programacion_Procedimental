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
function ValidarDatos(){
    
}
if (nombre_completo == '' && usurario == '' && estado_civil == '' && profesion == '' && fecha_nacimiento == '' && documento_identidad == '' && direccion == '' && rol == '' && telefono == '' && email ==''){
    console.log("los campos estan vacios")

}
else {
    if(nombre_completo != /[a-zA-Z]/){
       console.log('los datos son incorrectos')        
}


   if (telefono.lenght() > 10){
       console.log("los datos son incorrectos")
   }
   
   if (correo_electronico !=/(@)/){
       console.log("los datos son incorrectos")
   }

     if(documento_identidad == /[a-zA-Z]/){
        console.log('los datos son incorrectos')
     }
}