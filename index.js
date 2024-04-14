setInterval(() => {
    let clock = document.getElementsByClassName('clock')[0];
    let tiempoActual = new Date();
    let horas = tiempoActual.getHours();
    if (horas < 10){
        horas = '0' + horas;
    }
    let minutos = tiempoActual.getMinutes();
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    let segundos = tiempoActual.getSeconds();
    if (segundos < 10) {
        segundos = '0' + segundos;
    }
    clock.innerHTML = horas + ':' + minutos + ':' + segundos;

}, 1000)

