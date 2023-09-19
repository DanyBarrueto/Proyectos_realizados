// Función para obtener el valor de un campo de entrada
function obtenerValorInput(id) {
    return parseFloat(document.getElementById(id).value);
}

// Función para realizar el cálculo
function calcular(operando1, operando2, operacion) {
    switch (operacion) {
        case "+":
            return operando1 + operando2;
        case "-":
            return operando1 - operando2;
        case "*":
            return operando1 * operando2;
        case "/":
            return operando1 / operando2;
        default:
            return "Operación no válida";
    }
}

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault();

    const numero1 = obtenerValorInput("numero1");
    const numero2 = obtenerValorInput("numero2");
    const operacion = document.getElementById("operacion").value;

    const resultado = calcular(numero1, numero2, operacion);

    // Verificar si el resultado tiene decimales
    const resultadoConDecimales = resultado % 1 !== 0;

    // Mostrar el resultado en la consola y en la página
    if (resultadoConDecimales) {
        mostrarResultadoEnPagina(
            `El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`
        );
        console.log(
            `El resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`
        );
    } else {
        mostrarResultadoEnPagina(
            `El resultado de ${numero1} ${operacion} ${numero2} es: ${Math.trunc(
                resultado
            )}`
        );
        console.log(
            `El resultado de ${numero1} ${operacion} ${numero2} es: ${Math.trunc(
                resultado
            )}`
        );
    }
}

// Función para mostrar el resultado en la página
function mostrarResultadoEnPagina(resultado) {
    const resultadoElement = document.createElement("p");
    resultadoElement.textContent = resultado;
    document.body.appendChild(resultadoElement);
}

// Escuchar el evento "submit" del formulario
const form = document.getElementById("calculatorForm");
form.addEventListener("submit", handleSubmit);
