const URL = "https://rickandmortyapi.com/api/character/?page=19";

fetch(URL)
  .then(res => res.json())
  .then(d => mostrarDatos(d))
  .catch(err => {
    console.error('La API no funciona', err);
  });

 const mostrarDatos = (datos) => {
    console.log(datos);
    let element = ""; 
    const characters = datos.results; 
    for (let i = 0; i < characters.length; i++) {
        let episodesLinks = characters[i].episode.map(episodeUrl => 
            `<a href="#" data-url="${episodeUrl}" class="episode-link">Ver Episodio</a>`).join(", ");

        element += `<tr>
            <td>${characters[i].id}</td>
            <td>${characters[i].name}</td>
            <td>${characters[i].status}</td>
            <td>${characters[i].species}</td>
            <td>${characters[i].type || "N/A"}</td>
            <td>${characters[i].gender}</td>
            <td>${characters[i].origin.name}</td>
            <td>${characters[i].location.name}</td> 
            <td><img src="${characters[i].image}" alt="${characters[i].name}" width="50"></td> 
            <td>${characters[i].episode.length}</td>
            <td>${episodesLinks}</td> 
            <td>${characters[i].created}</td> 
        </tr>`;
    }
    document.getElementById("data").innerHTML = element; 
};

