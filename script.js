// 💡 Agregar números a la pantalla
function agregarNumero(num) {
    document.getElementById("pantalla").value += num;
}

// 💡 Operaciones matemáticas
function operacion(op) {
    document.getElementById("pantalla").value += op;
}

// 💡 Limpiar pantalla
function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

// 💡 Borrar último dígito
function borrarUltimo() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0, -1);
}

// 💡 Calcular el resultado
function calcularResultado() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    } catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}
