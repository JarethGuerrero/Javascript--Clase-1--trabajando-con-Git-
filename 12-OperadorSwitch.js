const ciudadDestino = 'Bogotá';
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

let valorPasaje = 0;

console.log(`Verificando pasajes para: ${ciudadDestino}`);
   //Condición con if
   /*
    if (ciudadDestino == 'Bogotá') {
        valorPasaje = 500;
    } else if (ciudadDestino == 'Lima') {
        valorPasaje = 400;
    } else if (ciudadDestino == 'Santiago') {
        valorPasaje = 380;
    } else if (ciudadDestino == 'Montevideo') {
        valorPasaje = 200;
    }*/
    switch(ciudadDestino){
        case 'Bogotá':
            valorPasaje = 500;
            break;
        case 'Lima':
            valorPasaje = 400;
            break;
        case 'Santiago':
            valorPasaje = 380;
            break;
        case 'Montevideo':
            valorPasaje = 200;
            break;
        default:
            console.log('No hay pasajes disponibles')
            valorPasaje = 0;
    }
    if (valorPasaje != 0) {
        console.log(`El valor del pasaje es de $${valorPasaje}`);
    }
     console.log(`El valor del pasaje es de $${valorPasaje}`);

