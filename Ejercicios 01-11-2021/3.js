let fecha1 = prompt("Introduce la fecha 1: ");
let fecha2 = prompt("Introduce la fecha 2: ");
 
fecha1 = Date.parse(fecha1)
fecha2 = Date.parse(fecha2)

let diffTiempo = Math.abs(fecha2 - fecha1)
let diffDias = Math.ceil(diffTiempo / (1000*60*60*24))

alert("La diferencia en dias es : "+diffDias)
 