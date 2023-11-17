const randomDate = (fecha = "2023-01-05") => {//"2023-01-01"
    const hoy = new Date();
    //const dosMesesAtras = new Date();
    const initDate = new Date(fecha);

    //dosMesesAtras.setMonth(hoy.getMonth() - 2);
  
    const tiempoAleatorio = (1-((Math.random())**1)) * (hoy.getTime() - initDate.getTime()) + initDate.getTime();
    const fechaAleatoria = new Date(tiempoAleatorio);
  
    return fechaAleatoria;
}

module.exports = randomDate