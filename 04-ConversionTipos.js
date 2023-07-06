//Tipos de datos
//Alfanumérico
//let nombrePasajero = "Pedro Silva"; 
//nombrePasajero = "Ramón Silva";


//Numérico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Lógicos (true,false)
let boletoActivo = true;

//Operaciones Aritméticas
//Suma
//let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;


//Orden de precedencia
//()
//* y /
//+ y -
let totalBoletos = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto)*porcentajeTasaEmbarque + gestionAgencia;


//Concatenacion de textos
let nombrePasajero = "Leonardo";
let apellidoPasajero = "DaVinci";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseFloat('1000') + parseInt('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

//NaN (not is a number)

let noEsUnNumero = parseFloat('BEBERTO');
console.log(noEsUnNumero);