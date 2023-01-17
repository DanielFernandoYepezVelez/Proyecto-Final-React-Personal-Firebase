import { tokenService } from './tokenService';

export async function AlbumsService() {

    // Token
    let token = await tokenService();

    // 1. PA DONDE VAS Y A QUE VAS (URL Y ENDPOINT)
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = 'https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/albums?market=US&limit=9';

    // 2. QUE OPERACIÓN VAS A HACER EN LA BASE DE DATOS (POST - GET - PUT - DELETE)
    // CONFIGURAR LA PETICIÓN DE ENVIO HACIA EL SERVIDOR
    const requestAlbums = {
        method: 'GET',
        headers: {
            Authorization: token,
        }
    };

    // 3. CONSUMIMOS LA API DE SPOTIFY
    let responseAlbums = await fetch(URL, requestAlbums); 
    let albums = await responseAlbums.json();
    
    return albums;
}