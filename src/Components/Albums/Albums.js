/* Hooks, Funciones Especiales De React */
/* useState => Me Permite Manejar El Estado Del Componente De Forma Local */
/* useEffect => Me Ayuda A Parar O Limitar El Consumo De Un API O Lo Que Se Requiera Limitar */
import { useState, useEffect } from "react";

// Services
import { AlbumsService } from '../../services/albumsService';

/* CSS */
import './Albums.css';

export function Albums() {
    const title = "Albums De La Banda";

    /* Para Manejar El Estado De Mi Componente De Forma Global Dentro Del Componente Únicamente */
    /* Usando El Hook useState Para Utilizar La Respuesta De La API De Forma Global Solo En El Mismo Componente */
    const [albums, setAlbums] = useState(null);
    const [stateLoad, setStateLoad] = useState(true);

    /* Usando El Hook useEffect Para Limitar El Consumo De La API A Una Sola Vez */
    useEffect(function() {
        AlbumsService()
            .then(function (response) {
                setAlbums(response)
                setStateLoad(false);
            })
            .catch(error => console.log(error));
    }, []);

    if(stateLoad) {
        return (
            <>
                <h1 className="text-center">Estamos Cargando Los Albums.......</h1>
            </>
        );
    } else {
        return (
            <>
                <h1 className="text-center m-5">{title}</h1>
                <div className="section__container--albums">
                    {
                        albums.items.map(function(album, index) {
                            return(
                                <div key={index}>
                                    {

                                        (index >= 0 && index < 3) ?
                                            (index === 0) ?
                                                <div className="box__containerA--areaMain1">
                                                    <div className="box__oneA1--main"></div>
                                                    <div className="box__twoA1--main"></div>
                                                    <div className="text-center box__containerA--textPosition1">
                                                        {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                        <h1>{album.name}</h1>
                                                        <p>Artista: {album.artists[0].name}</p>
                                                        <p>Canciones Del Album: {album.total_tracks}</p>
                                                        <p>Fecha Lanzamiento: {album.release_date}</p>
                                                    </div>
                                                </div>
                                            :
                                                (index === 1) ?
                                                    <div className="box__containerA--areaMain1">
                                                        <div className="box__oneA2--main"></div>
                                                        <div className="box__twoA2--main"></div>
                                                        <div className="text-center box__containerA--textPosition1">
                                                            {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                            <h1>{album.name}</h1>
                                                            <p>Artista: {album.artists[0].name}</p>
                                                            <p>Canciones Del Album: {album.total_tracks}</p>
                                                            <p>Fecha Lanzamiento: {album.release_date}</p>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className="box__containerA--areaMain1">
                                                        <div className="box__oneA3--main"></div>
                                                        <div className="box__twoA3--main"></div>
                                                        <div className="text-center box__containerA--textPosition1">
                                                            {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                            <h1>{album.name}</h1>
                                                            <p>Artista: {album.artists[0].name}</p>
                                                            <p>Canciones Del Album: {album.total_tracks}</p>
                                                            <p>Fecha Lanzamiento: {album.release_date}</p>
                                                        </div>
                                                    </div>
                                        :
                                            (index >= 3 && index < 6) ?
                                                (index === 3) ?
                                                    <div className="box__containerA--areaMain2">
                                                        <div className="box__oneA4--main"></div>
                                                        <div className="box__twoA4--main"></div>
                                                        <div className="text-center box__containerA--textPosition2">
                                                            {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                            <h1>{album.name}</h1>
                                                            <p>Artista: {album.artists[0].name}</p>
                                                            <p>Canciones Del Album: {album.total_tracks}</p>
                                                            <p>Fecha Lanzamiento: {album.release_date}</p>
                                                        </div>
                                                    </div>
                                                :
                                                    (index === 4) ?
                                                        <div className="box__containerA--areaMain2">
                                                            <div className="box__oneA5--main"></div>
                                                            <div className="box__twoA5--main"></div>
                                                            <div className="text-center box__containerA--textPosition2">
                                                                {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                                <h1>{album.name}</h1>
                                                                <p>Artista: {album.artists[0].name}</p>
                                                                <p>Canciones Del Album: {album.total_tracks}</p>
                                                                <p>Fecha Lanzamiento: {album.release_date}</p>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="box__containerA--areaMain2">
                                                            <div className="box__oneA6--main"></div>
                                                            <div className="box__twoA6--main"></div>
                                                            <div className="text-center box__containerA--textPosition2">
                                                                {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                                <h1>{album.name}</h1>
                                                                <p>Artista: {album.artists[0].name}</p>
                                                                <p>Canciones Del Album: {album.total_tracks}</p>
                                                                <p>Fecha Lanzamiento: {album.release_date}</p>
                                                            </div>
                                                        </div>
                                                :
                                                    (index >= 6 && index < 9) ?
                                                        (index === 6) ?
                                                            <div className="box__containerA--areaMain3">
                                                                <div className="box__oneA7--main"></div>
                                                                <div className="box__twoA7--main"></div>
                                                                <div className="text-center box__containerA--textPosition3">
                                                                    {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                                    <h1>{album.name}</h1>
                                                                    <p>Artista: {album.artists[0].name}</p>
                                                                    <p>Canciones Del Album: {album.total_tracks}</p>
                                                                    <p>Fecha Lanzamiento: {album.release_date}</p>
                                                                </div>
                                                            </div>
                                                        :
                                                            (index === 7) ?
                                                                <div className="box__containerA--areaMain3">
                                                                    <div className="box__oneA8--main"></div>
                                                                    <div className="box__twoA8--main"></div>
                                                                    <div className="text-center box__containerA--textPosition3">
                                                                        {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                                        <h1>{album.name}</h1>
                                                                        <p>Artista: {album.artists[0].name}</p>
                                                                        <p>Canciones Del Album: {album.total_tracks}</p>
                                                                        <p>Fecha Lanzamiento: {album.release_date}</p>
                                                                    </div>
                                                                </div>
                                                            :

                                                                <div className="box__containerA--areaMain3">
                                                                    <div className="box__oneA9--main"></div>
                                                                    <div className="box__twoA9--main"></div>
                                                                    <div className="text-center box__containerA--textPosition3">
                                                                        {/* <img className="img-fluid" src={album.images[0].url} alt="img_album"></img> */}
                                                                        <h1>{album.name}</h1>
                                                                        <p>Artista: {album.artists[0].name}</p>
                                                                        <p>Canciones Del Album: {album.total_tracks}</p>
                                                                        <p>Fecha Lanzamiento: {album.release_date}</p>
                                                                    </div>
                                                                </div>
                                                    :
                                                        <div></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </>
        );
    }
}