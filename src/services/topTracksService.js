import { computeHeadingLevel } from "@testing-library/react";

export async function topTracksService() {

    // 1. PA DONDE VAS Y A QUE VAS (URL Y ENDPOINT)
    // ESCRIBIR LA URL DEL SERVICIO DEL API
    const URL = 'https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq/top-tracks?market=US';

    // 2. QUE OPERACIÓN VAS A HACER EN LA BASE DE DATOS (POST - GET - PUT - DELETE)
    // CONFIGURAR LA PETICIÓN DE ENVIO HACIA EL SERVIDOR
    const requestTopTracks = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer BQAvQ5j0dmR27rNrl5MaQ0MV05STGq3vh810-pST2OdwGHGEFCBRZvqXDiVybRN9kiHj7JwdljjkZFK2WCmopjx1zXK8PA30uwMloh509oEnNYMWtp6v430coHd01wPCdhWJLfPFByW3SvinKDAlA4sD2G-9h_Gdrjtzy3wh7Hd6WhDRvbMCCn99-j35Sdo',
        }
    };

    // 3. CONSUMIMOS LA API DE SPOTIFY
    let responseTopTracks = await fetch(URL, requestTopTracks); 
    let songs = await responseTopTracks.json();

    console.log(songs);
}