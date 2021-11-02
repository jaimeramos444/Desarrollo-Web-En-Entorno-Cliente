//let d = new Date();

//d = new Date("Noviembre 02 , 2021 13:50:21");

//d = new Date(99,7,26,14,30,0);

//d = new Date(98,5,24);

//alert(d);

let hoy = new Date();
hoy = hoy.getFullYear();

let fecha = prompt("Introduce el año: ")

let mayorEdad = hoy - parseInt(fecha);

if (mayorEdad >= 18) {
    alert("El usuario es mayor de edad")
}else{
    alert("El usuario es menor de edad")
}
 
