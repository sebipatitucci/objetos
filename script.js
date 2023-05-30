let dineroCuenta = 100000;
let juegosInstalados = 5;

const videojuegos = {
    
    id: 1,
    nombre: "FIFA",
    compañia: "EA Sports",
    precio: 20000,
    cantidad: 10000,

    comprar: function(){
        dineroCuenta -= this.precio;
        alert("El dinero restante en la cuenta es: " + dineroCuenta)
    },

    vender: function(){
        dineroCuenta += this.precio;
        alert("El dinero restante en la cuenta es: " + dineroCuenta)
    },

    borrar: function(){
        juegosInstalados -= 1;
        alert("Tiene instalados " + juegosInstalados + " juegos");
    }
}

const equipo = {
    nombre: "Boca Juniors",
    estadio: "La Bombonera",
    jugadores: {
        arqueros: 3,
        defensores: 10,
        mediocampistas: 10,
        delanteros: 7
    },
    staff: 15,

    comprarJugadores: function(){
        posicion = prompt("Posicion de jugador a comprar")
        if (posicion == "arquero"){
            this.jugadores.arqueros += 1
            alert("El equipo cuenta con " + this.jugadores.arqueros + " arqueros")
        }
        else if (posicion == "defensor"){ 
            this.jugadores.defensores += 1
            alert("El equipo cuenta con " + this.jugadores.defensores + " defensores")
        }
        else if (posicion == "mediocampista"){
            this.jugadores.mediocampistas += 1 
            alert("El equipo cuenta con " + this.jugadores.mediocampistas + " mediocampistas")
        }
        else if (posicion == "delantero"){
             this.jugadores.delanteros += 1
             alert("El equipo cuenta con " + this.jugadores.delanteros + " delanteros")
        }
        else{alert("Escriba una posicion valida")}
    },

    venderJugadores: function(){
        posicion = prompt("Posicion de jugador a vender")
        if (posicion == "arquero"){
            this.jugadores.arqueros -= 1
            alert("El equipo cuenta con " + this.jugadores.arqueros + " arqueros")
        }
        else if (posicion == "defensor"){ 
            this.jugadores.defensores -= 1
            alert("El equipo cuenta con " + this.jugadores.defensores + " defensores")
        }
        else if (posicion == "mediocampista"){
            this.jugadores.mediocampistas -= 1 
            alert("El equipo cuenta con " + this.jugadores.mediocampistas + " mediocampistas")
        }
        else if (posicion == "delantero"){
             this.jugadores.delanteros -= 1
             alert("El equipo cuenta con " + this.jugadores.delanteros + " delanteros")
        }
        else{alert("Escriba una posicion valida")}
    }

}

const curso = {
    nombre: "Codo a Codo",
    duracion: "6 meses",
    profesor: "Jose Zapata",
    alumnos: 80,
    mail: "codoacodo@gmail.com",

    agregarAlumno: function(){
        alumnosAgregados = parseInt(prompt("Cuantos alumnos desea inscribir?"))
        this.alumnos += alumnosAgregados
        
        alert("Hay inscriptos " + this.alumnos + " alumnos")
    },

    eliminarAlumno: function(){
        alumnosEliminados = parseInt(prompt("Cuantos alumnos desea eliminar?"))

        if(alumnosEliminados < this.alumnos){
            this.alumnos -= alumnosEliminados 
            alert("Hay inscriptos " + this.alumnos + " alumnos")
        }
    }
}

