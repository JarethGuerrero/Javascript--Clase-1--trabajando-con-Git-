const presupuestoDisponible = 400;
const datos = [
    {
        'ciudad' : 'Bogotá',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    },
];

let i = 0;
let ciudadSeleccionada = '';
//while = 0 o más veces;
//do = 1 o más veces;
/*
while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}
*/

//do while
do {
    if (datos[i].precio <= presupuestoDisponible){
    ciudadSeleccionada = datos[i].ciudad;
    break;
    } 
    i++;
} while (i < datos.length && ciudadSeleccionada == '');

if (ciudadSeleccionada == ''){
    console.log('No hay pasajes disponibles');
}
else
    console.log('Puedes comprar pasaje para: '+ ciudadSeleccionada);

/*
for (let i = 0; i < datos.length; i++){
    if (datos[i].precio < presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
};
*/