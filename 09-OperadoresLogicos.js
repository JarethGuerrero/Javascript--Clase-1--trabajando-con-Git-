//Operadores de comparación
const valorPasaje = 1000;

if(valorPasaje === 1000){
    console.log('El pasaje vale $1000');
}

const ciudadDestino = 'Santiago';
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

//Palabra reservada "if"
//Evalúa una condición
/*console.log(`Verificando pasajes para: ${ciudadDestino}`)
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para venta');
    
}
else{
    console.log('Cuidad no disponible para viajar');
}
*/
/*
Operadores lógicos
Y (AND) - O (OR) - NO (NOT)
AND = && - Se deben de cumplir las dos condiciones
OR = || - Se debe de cumplir al menos una condición
NOT = ! - No se cumple la comdición
*/
let edadPasajero = 17;
let estaAcompanhado = true;

console.log(`Verificando pasajes para: ${ciudadDestino}`)

if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && (edadPasajero >= 18 || estaAcompanhado)){
    console.log('Pasaje disponible para venta');
}
else{
    console.log('Cuidad no disponible o pasajero no cumple las reglas para viajar');
}

edadPasajero = 17;
estaAcompanhado = true;
//Aplicando lógica negativa
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&
    (edadPasajero >= 18 || estaAcompanhado))) {
    console.log('Cuidad no disponible o pasajero no cumple las reglas para viajar');
}
else{
    console.log('Pasaje disponible para venta');
}
