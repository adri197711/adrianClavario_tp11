let palabra = "gato";

let traduccion;
switch (palabra.toLowerCase()) {
    case "perro":
        traduccion = "dog";
        break;    case "gato":
        traduccion = "cat";
        break;
    case "puerta":
        traduccion = "door";
        break;
    case "ventana":
        traduccion = "window";
        break;
    case "mesa":
        traduccion = "table";
        break;
    default:
        traduccion = "La palabra ingresada es incorrecta";
}

console.log(traduccion);