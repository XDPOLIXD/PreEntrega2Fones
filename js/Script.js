let calculadoraArray = [];

function iniciarCalculadora() {
    let continuar = true; // Movido aquí para que siempre se reinicie al iniciar la calculadora
    while (continuar) {
        let operacion = prompt("Ingrese la operación (+, -, *, /):");
        if (operacion === null) { // Si el usuario cancela, salir del bucle pero seguir disponible
            break;
        }
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (Number.isNaN(num1) || Number.isNaN(num2)) { // Verificar si las entradas son números válidos
            alert("Por favor, ingrese números válidos.");
            continue; // Reiniciar el ciclo sin ejecutar el resto del código
        }

        realizarOperacion(operacion, num1, num2);
        mostrarResultado();
    }
}

function realizarOperacion(operacion, num1, num2) {
    switch (operacion) {
        case '+':
            calculadoraArray.push(num1 + num2);
            break;
        case '-':
            calculadoraArray.push(num1 - num2);
            break;
        case '*':
            calculadoraArray.push(num1 * num2);
            break;
        case '/':
            if (num2 !== 0) {
                calculadoraArray.push(num1 / num2);
            } else {
                alert("Error: No se puede dividir por cero.");
            }
            break;
        default:
            alert("Operación no válida.");
    }
}

function mostrarResultado() {
    alert("Resultado: " + calculadoraArray[calculadoraArray.length - 1]);
}
