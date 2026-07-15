var ventas = document.getElementById("ventas");
var fecha = document.getElementById("birthday");
var ingresos = document.getElementById("ingresos");
var egresos = document.getElementById("egresos");
var concepto = document.getElementById("concepto");
var valor = document.getElementById("valor");

function ValidarDatosContabilidad() {
    if (ventas.value != "" && fecha.value != "" && ingresos.value != "" && egresos.value != "" && concepto.value != "" && valor.value != "") {

        if (/[a-zA-Z]/.test(ventas.value)) {
            Swal.fire({
                icon: "error",
                title: "Algo Salio Mal...",
                text: "El campo cantidad no debe contener letras.",

            });
            return;
        }

        if (/[a-zA-Z]/.test(ingresos.value)) {
            Swal.fire({
                icon: "error",
                title: "Algo Salio Mal...",
                text: "El campo ingresos no debe contener letras.",

            });
            return;
        }

        if (/[a-zA-Z]/.test(egresos.value)) {
            Swal.fire({
                icon: "error",
                title: "Algo Salio Mal...",
                text: "El campo egresos no debe contener letras.",

            });
            return;
        }

        if (/[a-zA-Z]/.test(valor.value)) {
            Swal.fire({
                icon: "error",
                title: "Algo Salio Mal...",
                text: "El campo valor no debe contener letras.",

            });
            return;
        }
        console.log("ventas: " + ventas.value);
        console.log("fecha: " + fecha.value);
        console.log("ingresos: " + ingresos.value);
        console.log("egresos: " + egresos.value);
        console.log("concepto: " + concepto.value);
        console.log("valor: " + valor.value);


        Swal.fire({
            icon: "success",
            title: "Datos Validados",
            text: "Los datos de contabilidad han sido validados correctamente.",
        });


    } else {
        Swal.fire({
            title: "Algo Salio Mal...",
            text: "Por favor, complete todos los campos.",
            icon: "error"
        });
        return;
    }
}

document.getElementById("btnenviar").onclick = ValidarDatosContabilidad;