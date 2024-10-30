//Micro desafío 3 


const num1 = 10;
const num2 = 10;
let operacion = "multiplicar"; 
let resultado;

switch (operacion.toLowerCase()) {
    case "sumar":
        resultado = num1 + num2;
        console.log(`El resultado de sumar ${num1} + ${num2} es: ${resultado}`);
        break;
    case "restar":
        resultado = num1 - num2;
        console.log(`El resultado de restar ${num1} - ${num2} es: ${resultado}`);
        break;
    case "multiplicar":
        resultado = num1 * num2;
        console.log(`El resultado de multiplicar ${num1} * ${num2} es: ${resultado}`);
        break;
    case "dividir":
            resultado = num1 / num2;
            console.log(`El resultado de dividir ${num1} / ${num2} es: ${resultado}`);
 
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir");
}