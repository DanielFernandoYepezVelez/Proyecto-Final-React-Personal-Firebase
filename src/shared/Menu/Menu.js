import { Link } from "react-router-dom";

import './Menu.css'

export function Menu() {
    return (
        <>
            <header class="header__container container">
                <Link to="/home">
                    <figure>
                        <Link to="/home">
                            {/* <img src="https://preview.redd.it/p8pd8ooey1h61.png?width=640&crop=smart&auto=webp&s=d7ae2b49bedf25a1b2b6fac581b2a8e94abcd05a" alt="LogoImage" /> */}
                            <img src="https://www.logosenvector.com/logo/img/one-direction-1d-29.jpg" alt="LogoImage" />
                        </Link>
                    </figure>
                </Link>
                <nav class="navegation__container">
                    <ul class="navegation__unorganized--list">
                        <li class="unorganized__list active">
                            <Link to="/home">
                                <span class="unorganized__icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/home">Inicio</Link>
                                </span>
                            </Link>
                        </li>

                        <li class="unorganized__list active">
                            <Link to="/history">
                                <span class="unorganized__icon"><ion-icon name="chatbubbles-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/history">Historia</Link>
                                </span>
                            </Link>
                        </li>

                        <li class="unorganized__list active">
                            <Link to="/members">
                                <span class="unorganized__icon"><ion-icon name="people-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/members">Integrantes</Link>
                                </span>
                            </Link>
                        </li>

                        <li class="unorganized__list active">
                            <Link to="/music">
                                <span class="unorganized__icon"><ion-icon name="musical-notes-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/music">Musica</Link>
                                </span>
                            </Link>
                        </li>

                        <li class="unorganized__list active">
                            <Link to="/albums">
                                <span class="unorganized__icon"><ion-icon name="albums-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/albums">Albumes</Link>
                                </span>
                            </Link>
                        </li>
                        
                        <li class="unorganized__list active">
                            <Link to="/merchandise">
                                <span class="unorganized__icon"><ion-icon name="storefront-outline"></ion-icon></span>
                                <span class="unorganized__text">
                                    <Link to="/merchandise">Mercancia</Link>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

{/* <nav class="navbar navbar-expand-lg menu navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">One Direction</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/history">Historia</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/members">Integrantes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/music">Musica</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/albums">Albumes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/merchandise">Mercancia</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav> */}