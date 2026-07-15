var producto = document.getElementById("producto");
var direccion = document.getElementById("direccion");
var nombre = document.getElementById("nombre_usuario");
var cantidad = document.getElementById("cantidad");
var pago = document.getElementById("metodo_pago");
var telefono = document.getElementById("telefono");

function ValidarDatosPedido() {
  if (producto.value != "" && direccion.value != "" && nombre.value != "" && cantidad.value != "" && pago.value != "" && telefono.value != "") {
    if (/[a-zA-Z]/.test(cantidad.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo cantidad no debe contener letras.",

      });
      return;
    }
    if (/[a-zA-Z]/.test(telefono.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo telefono no debe contener letras.",

      });
      return;
    }
    if (/[a-zA-Z]/.test(nombre.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo nombre no debe contener números.",

      });
      return;
    }
    console.log("producto: " + producto.value);
    console.log("direccion: " + direccion.value);
    console.log("nombre: " + nombre.value);
    console.log("cantidad: " + cantidad.value);
    console.log("pago: " + pago.value);
    console.log("telefono: " + telefono.value);








    Swal.fire({
      icon: "success",
      title: "Datos Validados",
      text: "Los datos del pedido han sido validados correctamente.",

    });
    return;

  } else {
    Swal.fire({
      icon: "error",
      title: "Algo Salio Mal...",
      text: "Revise todos los campos, por favor complete todos los campos.",

    });
    return;
  }



}
document.getElementById("btnenviar").onclick = ValidarDatosPedido;