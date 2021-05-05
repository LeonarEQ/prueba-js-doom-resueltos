async function obtenerPersonajesPorEpisodio(url) {
    let personajes = [];

    await fetch(url).then((response) => response.json()).then((data) => {
        personajes.push(data.name);
    });

    return personajes;
}

async function obtenerPersonajes() {

    const API_URL_EPISODES = `https://rickandmortyapi.com/api/episode?page=`;

    let urlsPersonajes = [];

    for (const numeroPagina of [1, 2, 3]) {

        await fetch(`${API_URL_EPISODES}${numeroPagina}`).then((response) => response.json()).then((data) => {
            let results = data.results;

            results.forEach((r) => {
                let airDate = new Date(r.air_date);

                if (airDate.getMonth() == 0) {
                    urlsPersonajes = [...urlsPersonajes, ...r.characters];
                }
            });
        });
    }

    let nombresPersonajes = [];

    for (const url of urlsPersonajes) {
        nombresPersonajes = [...nombresPersonajes, (await obtenerPersonajesPorEpisodio(url))];
    }

    return nombresPersonajes;
}

async function iniciar() {
    let nombresPersonajes = await obtenerPersonajes();
    console.log(nombresPersonajes);
}

iniciar();
