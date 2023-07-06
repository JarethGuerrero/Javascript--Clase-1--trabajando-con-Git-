//Palabra const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Fuentes";

console.log(nombrePasajero);
console.log(apellidoPasajero);


//Bloque
{
    //Palabra let
    //Espacio de memoria que puede cambiar durante la ejecucion del programa
    //Esta variable solamente queda asignada dentro del bloque trabajado
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

    //Palabra var
    //Espacio de memoria que puede cambiar durante la ejecucion del programa
    //El alcance de la variable es en todo el codigo incluyendo bloques y sub-bloques
    var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoPasajero);
}

/*
La siguiente línea no compila dado que es una variable let que no ha sido asignada en el código padre:
//console.log("Variable con let: " + nombreCompletoPasajero);
*/
console.log("Variable con var: " + nombreCompletoDelPasajero);
