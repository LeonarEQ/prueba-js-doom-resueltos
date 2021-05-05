var idCronometro;
var milisegundos;

window.onload = function () {
    document.querySelector('#iniciar').addEventListener('click', iniciar);
    document.querySelector('#detener').addEventListener('click', detener);
    document.querySelector('#resetear').addEventListener('click', resetear);

    document.querySelector('#detener').disabled = true;
    document.querySelector('#resetear').disabled = true;

    milisegundos = 0;
}

function formatearTiempo(milisegundos) {
    let segundos = Math.floor(milisegundos/1000);
    milisegundos = milisegundos % 1000;
    let minutos = Math.floor(segundos / 60);
    segundos = segundos % 60;

    document.querySelector('#minutos').textContent = minutos < 10 ? `0${minutos}` : minutos;
    document.querySelector('#segundos').textContent = segundos < 10 ? `0${segundos}` : segundos;;
    document.querySelector('#milisegundos').textContent = milisegundos;
}

function iniciar() {
    idCronometro = setInterval(() => {
        formatearTiempo(milisegundos);

        milisegundos += 100;
    }, 100);

    document.querySelector('#iniciar').disabled = true;
    document.querySelector('#detener').disabled = false;
    document.querySelector('#resetear').disabled = false;
}

function detener() {
    clearInterval(idCronometro);

    document.querySelector('#iniciar').disabled = false;
    document.querySelector('#detener').disabled = true;
}

function resetear() {
    milisegundos = 0;
    clearInterval(idCronometro);

    document.querySelector('#iniciar').disabled = false;
    document.querySelector('#detener').disabled = true;
    document.querySelector('#resetear').disabled = true;

    document.querySelector('#minutos').textContent = '00';
    document.querySelector('#segundos').textContent = '00';
    document.querySelector('#milisegundos').textContent = '000';
}
