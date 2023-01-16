export async function topTracksService() {

    // 1. PA DONDE VAS Y A QUE VAS (URL Y ENDPOINT)
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = 'https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/top-tracks?market=US';

    // 2. QUE OPERACIÓN VAS A HACER EN LA BASE DE DATOS (POST - GET - PUT - DELETE)
    // CONFIGURAR LA PETICIÓN DE ENVIO HACIA EL SERVIDOR
    const requestTopTracks = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer BQA42gjEqlItJ5vKzhbgIi5dWW-JPTTg3XqKK1jf2Pg9OI56Vr4n3gI55NIybcvnxbxJATK4TRy6ZedZd-hE6Sd3eylIX3bplbEWm0wcxn_rXupVZ4U7d-lr7MhK9S2IY9iTKTWRhUjBAlGRt-E9-Je4Q3dI-j6r2_h5MxSyYz_82gY7hvEg5J4lOyDKkjI',
        }
    };

    // 3. CONSUMIMOS LA API DE SPOTIFY
    let responseTopTracks = await fetch(URL, requestTopTracks); 
    let songs = await responseTopTracks.json();
    
    return songs;
}