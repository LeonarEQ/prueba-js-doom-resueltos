function formatear(tiempo) {
    let minutos = Math.floor(tiempo / 60);
    let segundos = tiempo % 60;

    let horas = Math.floor(minutos / 60);
    minutos = minutos % 60;

    let dias = Math.floor(horas / 24);
    horas = horas % 24;


    return `Días: ${dias} / Horas: ${horas} / Minutos: ${minutos} / Segundos: ${segundos}`;
}


function iniciarConteo() {

    let tiempo = 0;

    setInterval(() => {
        console.log(formatear(tiempo))

        tiempo += 5;
    }, 5000);

}

iniciarConteo();
