var nombre = document.getElementById("nombre").value;


var direccion = document.getElementById("direccion");

var correo = document.getElementById("correo");
var contraseña = document.getElementById("contraseña");
var nacimiento = document.getElementById("birthday");
var documento = document.getElementById("documento");
var profesion = document.getElementById("profesion");

function ValidarDatos() {
  if (nombre.value != "" && direccion.value != "" && correo.value != "" && contraseña.value != "" && nacimiento.value != "" && documento.value != "" && profesion.value != "") {

    if (/\d/.test(nombre.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo nombre no debe contener números.",

      });
    }

    if (correo.value.indexOf("@") === -1) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo correo debe contener @.",

      });
    }

    if (contraseña.value.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo contraseña debe tener al menos 8 caracteres.",

      });
    }

    if (!/^\d+$/.test(documento.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo documento debe contener solo números.",

      });
    }
    console.log("nombre: " + nombre.value);
    console.log("direccion: " + direccion.value);
    console.log("correo: " + correo.value);
    console.log("contraseña: " + contraseña.value);
    console.log("nacimiento: " + nacimiento.value);
    console.log("documento: " + documento.value);
    console.log("profesion: " + profesion.value);




    Swal.fire({
      icon: "success",
      title: "Datos Validados",
      text: "Los datos del usuario han sido validados correctamente.",

    });
    return;



  } else {
    Swal.fire({
      title: "Algo Salio Mal...",
      text: "Por favor, complete todos los campos.",
      icon: "error"
    });
  }
}

document.getElementById("btnenviar").onclick = ValidarDatos;