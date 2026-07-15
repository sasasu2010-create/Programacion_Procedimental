var correoc = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");
function ValidarDatosContacto() {
    if (correoc.value != "" && mensaje.value != "") {
        if (correoc.value.indexOf("@") === -1) {
            Swal.fire({
                icon: "error",
                title: "Algo Salio Mal...",
                text: "Por favor, ingrese un correo electrónico válido.",

            });
            return;
        }
        console.log("correo: " + correoc.value);
        console.log("mensaje: " + mensaje.value);


        Swal.fire({
            icon: "success",
            title: "Datos Validados",
            text: "Los datos de contacto han sido validados correctamente.",

        });
        return;






    } else {
        Swal.fire({
            icon: "error",
            title: "Algo Salio Mal...",
            text: "Por favor, complete todos los campos.",

        });
        return;
    }
}