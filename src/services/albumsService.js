export async function AlbumsService() {

    // 1. PA DONDE VAS Y A QUE VAS (URL Y ENDPOINT)
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = 'https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/albums?market=US&limit=9';

    // 2. QUE OPERACIÓN VAS A HACER EN LA BASE DE DATOS (POST - GET - PUT - DELETE)
    // CONFIGURAR LA PETICIÓN DE ENVIO HACIA EL SERVIDOR
    const requestAlbums = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer BQDO6YGpcmPpw1wnfaFIo_g0iM4zvMTUamYN4hMIAEvHALmhssf3TJt0G3Z_3RC7P8aUTLsqjrcL1MkRWcFKScpiX_rdd1UM_Pjrg-mPn6IyuWKydSZRe-839hAKg6KfrQzHZKEWopLNw98pTDMYbhW1RYwnuA8Pwyz24XpA1gPe_EyrGUWdZIpug2wMZA0',
        }
    };

    // 3. CONSUMIMOS LA API DE SPOTIFY
    let responseAlbums = await fetch(URL, requestAlbums); 
    let albums = await responseAlbums.json();
    
    return albums;
}