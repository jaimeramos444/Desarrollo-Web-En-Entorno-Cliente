let fecha1 = prompt("Introduce la fecha 1: ");
let fecha2 = prompt("Introduce la fecha 2: ");

let uno = fecha1
let dos = fecha2

fecha1 = Date.parse(fecha1)
fecha2 = Date.parse(fecha2)

if (fecha1 > fecha2) {
    alert("La fecha: "+uno+" es mayor que la fecha: "+dos)
}else{
    alert("La fecha: "+dos+" es mayor que la fecha: "+uno)
}