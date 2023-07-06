const ciudadDestino = 'Lima';
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
let edadPasajero = 17;
let estaAcompanhado = false;

console.log(`Verificando pasajes para: ${ciudadDestino}`)
//Verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanhado){
    //Evaluamos si la ciudad está disponible para viajar
    if (ciudadesDisponibles.includes(ciudadDestino)){
        console.log('Pasaje disponible para venta');
    }
    else{
        console.log('Cuidad no disponible para viajar');
    }
} else{
    if (edadPasajero >= 16 && ciudadDestino == "Lima"){
        console.log('Pasaje disponible para venta');
    } else{
        console.log('Pasajero no cumple las reglas.');
    }
}