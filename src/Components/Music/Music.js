/* Hooks, Funciones Especiales De React */
/* useState => Me Permite Manejar El Estado */
/* useEffect => Me Ayuda A Parar O Limitar El Consumo De Un API O Lo Que Se Requiera Limitar */
import { useState, useEffect } from "react";

// Services
import { topTracksService } from "../../services/topTracksService";

/* CSS */
import './Music.css';

export function Music() {
    const title = "Musica De La Banda";

    /* Para Manejar El Estado De Mi Componente De Forma Global*/
    /* Usando El Hook useState Para Utilizar La Respuesta De La API De Forma Global Solo En El Mismo Componente */
    const[songs, setSongs] = useState(null);
    const[stateLoad, setStateLoad] = useState(true);

    /* Usando El Hook useEffect Para Limitar El Consumo De La API A Una Sola Vez, Para  */
    useEffect(function() {
        topTracksService()
        .then(function(response) {
            setSongs(response);
            setStateLoad(false);
        })
        .catch(error => console.log(error));
    },[]);

    console.log(songs);

    /* Render Del Componente */
    if (stateLoad) {
        return (
            <>
                <h1 className="text-center">Estamos Cargando Las Canciones.......</h1>
            </>
        );
    } else {
        return (
            <>
                <h1 className="text-center m-5">{title}</h1>
                <div className="section__container--music">
                    {
                        songs.tracks.map(function(song) {
                            return(
                                <div className="text-center">
                                    <img className="img-fluid" src={song.album.images[0].url}></img>
                                    <h1>{song.name}</h1>
                                    <audio controls src={song.preview_url}></audio>
                                    <p>Popularidad {song.popularity}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        );
    }
}