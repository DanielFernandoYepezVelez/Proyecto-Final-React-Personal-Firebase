export async function topTracksService() {

    // 1. PA DONDE VAS Y A QUE VAS (URL Y ENDPOINT)
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = 'https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/top-tracks?market=US';

    // 2. QUE OPERACIÓN VAS A HACER EN LA BASE DE DATOS (POST - GET - PUT - DELETE)
    // CONFIGURAR LA PETICIÓN DE ENVIO HACIA EL SERVIDOR
    const requestTopTracks = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer BQACEMrx6Z5TQvPdDIhPi3lkpo0rqOeuZ2fEKmxBQmY9NF5hLcu88o4iCC1O1taHVPVRzYx2Mdl6ovXB0YRMStr6gy2XtDi7VzZdSoAfrfBAc0s154-rpacmRbvIG6LpZ3BAHXWfk0tJo1voWISUwCTUalXvp0__AIzKr3ItdK7-VCdulSMBFooxDZdIFbY',
        }
    };

    // 3. CONSUMIMOS LA API DE SPOTIFY
    let responseTopTracks = await fetch(URL, requestTopTracks); 
    let songs = await responseTopTracks.json();

    return songs;
}