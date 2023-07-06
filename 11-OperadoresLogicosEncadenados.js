let edadPasajero = 29;
let estaAcompanhado = true;
let tienePasaporte = true;
let estaCasado = true;
const ciudadDestino = 'Santiago';
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");


console.log(`Verificando pasajes para: ${ciudadDestino}`)

//A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && edadPasajero >= 18 && tienePasaporte && estaCasado){
    console.log('Paquete para solteros disponible');
}
else{
    console.log('Cuidad no disponible o pasajero no cumple las reglas para viajar');
}
