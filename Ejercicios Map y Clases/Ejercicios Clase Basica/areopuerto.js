
class Aereopuerto {

    constructor(nombre, ciudad, numVuelosDiarios){
        this.nombre = nombre;
        this.ciudad = ciudad; 
        this.numVuelosDiarios = numVuelosDiarios;

    }

 
    numVuelos(){
        this.numVuelosDiarios
    }


    cambiarHoraLlegada(nuevaHora){
        this.horaLlegada = nuevaHora
    }

}

class Vuelo {


    constructor(codigo, horaLlegada, horaSalida){
        this.condigo = codigo;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;

    }

    consultarHoraLLegada(){
        console.log("La hora de llegada del vuelo es a las: "+this.horaLlegada)

    }

    cambiarHoraLlegada(n){
        this.horaLlegada = n 
    }

    consultarHoraSalida(){
        console.log("La hora de salida del vuelo es a las: "+this.horaSalida)
    }

    cambiarHoraSalida(n){
        this.horaSalida = n 
    }

    comprobacion(){
        if (this.horaSalida > this.horaLlegada) {
            console.log("La hora de salida es posterior a la hora de llegada")
        }else{
            console.log("La hora de llegada es posterior a la hora de salida")
        }
    }



}

function main(){

    let vuelo1 = new Vuelo(32, 5, 12);



    vuelo1.consultarHoraLLegada();
    vuelo1.cambiarHoraLlegada(7);
    vuelo1.consultarHoraLLegada();
    vuelo1.consultarHoraSalida();
    vuelo1.cambiarHoraSalida(14);
    vuelo1.consultarHoraSalida();
    vuelo1.comprobacion();

}

main();