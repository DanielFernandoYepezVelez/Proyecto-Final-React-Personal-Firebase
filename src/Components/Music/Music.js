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
                        songs.tracks.map(function(song, index) {
                            return(
                                <div key={index}>
                                    {
                                        (index >= 0 && index < 3) ?
                                            (index === 0) ?
                                                <div className="box__containerM--areaMain1">
                                                    <div className="box__oneM1--main"></div>
                                                    <div className="box__twoM1--main"></div>
                                                    <div className="text-center box__containerM--textPosition1">
                                                        {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                        <h1>{song.name}</h1>
                                                        <audio controls src={song.preview_url}></audio>
                                                        <figure>
                                                            <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                            <p>{song.popularity}</p>
                                                        </figure>
                                                        {/* <p>Popularidad {song.popularity}</p> */}
                                                    </div>
                                                </div>
                                            :
                                                (index === 1) ?
                                                    <div className="box__containerM--areaMain1">
                                                        <div className="box__oneM2--main"></div>
                                                        <div className="box__twoM2--main"></div>
                                                        <div className="text-center box__containerM--textPosition1">
                                                            {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                            <h1>{song.name}</h1>
                                                            <audio controls src={song.preview_url}></audio>
                                                            <figure>
                                                                <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                <p>{song.popularity}</p>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                :
                                                    <div className="box__containerM--areaMain1">
                                                        <div className="box__oneM3--main"></div>
                                                        <div className="box__twoM3--main"></div>
                                                        <div className="text-center box__containerM--textPosition1">
                                                            {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                            <h1>{song.name}</h1>
                                                            <audio controls src={song.preview_url}></audio>
                                                            <figure>
                                                                <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                <p>{song.popularity}</p>
                                                            </figure>
                                                        </div>
                                                    </div>
                                        :
                                            (index >= 3 && index < 6) ?
                                                (index === 3) ?
                                                    <div className="box__containerM--areaMain2">
                                                        <div className="box__oneM3--main"></div>
                                                        <div className="box__twoM3--main"></div>
                                                        <div className="text-center box__containerM--textPosition2">
                                                            <h1>{song.name}</h1>
                                                            <audio controls src={song.preview_url}></audio>
                                                            <figure>
                                                                <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                <p>{song.popularity}</p>
                                                            </figure>
                                                        </div>
                                                    </div>    
                                            :
                                                (index === 4) ?
                                                    <div className="box__containerM--areaMain2">
                                                        <div className="box__oneM4--main"></div>
                                                        <div className="box__twoM4--main"></div>
                                                        <div className="text-center box__containerM--textPosition2">
                                                            {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                            <h1>{song.name}</h1>
                                                            <audio controls src={song.preview_url}></audio>
                                                            <figure>
                                                                <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                <p>{song.popularity}</p>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                : 
                                                    (index === 5) ?
                                                        <div className="box__containerM--areaMain2">
                                                            <div className="box__oneM5--main"></div>
                                                            <div className="box__twoM5--main"></div>
                                                            <div className="text-center box__containerM--textPosition2">
                                                                {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                                <h1>{song.name}</h1>
                                                                <audio controls src={song.preview_url}></audio>
                                                                <figure>
                                                                    <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                    <p>{song.popularity}</p>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="box__containerM--areaMain2">
                                                            <div className="box__oneM6--main"></div>
                                                            <div className="box__twoM6--main"></div>
                                                            <div className="text-center box__containerM--textPosition2">
                                                                {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                                <h1>{song.name}</h1>
                                                                <audio controls src={song.preview_url}></audio>
                                                                <figure>
                                                                    <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                    <p>{song.popularity}</p>
                                                                </figure>
                                                            </div>
                                                        </div>
                                        :
                                            (index >= 6 && index < 9) ?
                                                (index === 6) ?
                                                    <div className="box__containerM--areaMain3">
                                                        <div className="box__oneM7--main"></div>
                                                        <div className="box__twoM7--main"></div>
                                                        <div className="text-center box__containerM--textPosition3">
                                                            <h1>{song.name}</h1>
                                                            <audio controls src={song.preview_url}></audio>
                                                            <figure>
                                                                <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                <p>{song.popularity}</p>
                                                            </figure>
                                                        </div>
                                                    </div>    
                                                :
                                                    (index === 7) ?
                                                        <div className="box__containerM--areaMain3">
                                                            <div className="box__oneM8--main"></div>
                                                            <div className="box__twoM8--main"></div>
                                                            <div className="text-center box__containerM--textPosition3">
                                                                {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                                <h1>{song.name}</h1>
                                                                <audio controls src={song.preview_url}></audio>
                                                                <figure>
                                                                    <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                    <p>{song.popularity}</p>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="box__containerM--areaMain3">
                                                            <div className="box__oneM9--main"></div>
                                                            <div className="box__twoM9--main"></div>
                                                            <div className="text-center box__containerM--textPosition3">
                                                                {/* <img className="img-fluid" src={song.album.images[0].url}></img> */}
                                                                <h1>{song.name}</h1>
                                                                <audio controls src={song.preview_url}></audio>
                                                                <figure>
                                                                    <img src="https://raw.githubusercontent.com/DanielFernandoYepezVelez/02-Proyecto-JavaScript-Venta-Cursos/master/public/assets/img/estrellas.png" alt="starts"></img>
                                                                    <p>{song.popularity}</p>
                                                                </figure>
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



{/* <div className="text-center">
                                         
                                        <h1>{song.name}</h1>
                                        <audio controls src={song.preview_url}></audio>
                                        <p>Popularidad {song.popularity}</p>
                                    </div> */}