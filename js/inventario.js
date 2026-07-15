var codigo = document.getElementById("codigo_producto");
var nombre = document.getElementById("nombre_producto");
var precio = document.getElementById("precio_inventario");
var cantidad = document.getElementById("cantidad_producto");
var marca = document.getElementById("marca_producto");
var categoria = document.getElementById("categoria_producto");
var unidad = document.getElementById("unidad_medida");


function ValidarDatosInventario() {
  if (codigo.value != "" && nombre.value != "" && precio.value != "" && cantidad.value != "" && marca.value != "" && categoria.value != "" && unidad.value != "") {
    if (/[a-zA-Z]/.test(codigo.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo codigo no debe contener letras.",

      });
      return;
    }



    if (/[a-zA-Z]/.test(precio.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo precio no debe contener letras.",

      });
      return;
    }
    if (/[a-zA-Z]/.test(cantidad.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo cantidad no debe contener letras.",

      });
      return;
    }
    if (/\d/.test(categoria.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo categoria del producto no debe contener números.",

      });
      return;
    }
    if (/\d/.test(unidad.value)) {
      Swal.fire({
        icon: "error",
        title: "Algo Salio Mal...",
        text: "El campo unidad de medida no debe contener números.",

      });
      return;
    }
    console.log("codigo: " + codigo.value);
    console.log("nombre: " + nombre.value);
    console.log("precio: " + precio.value);
    console.log("cantidad: " + cantidad.value);
    console.log("marca: " + marca.value);
    console.log("categoria: " + categoria.value);
    console.log("unidad: " + unidad.value);




    Swal.fire({
      icon: "success",
      title: "Datos Validados",
      text: "Los datos de inventario han sido validados correctamente.",

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

document.getElementById("btnenviar").onclick = ValidarDatosInventario;