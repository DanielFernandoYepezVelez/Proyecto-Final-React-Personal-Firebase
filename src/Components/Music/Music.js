// Services
import { topTracksService } from "../../services/topTracksService";

export function Music() {

    topTracksService();

    return (
        <>
            <h1>Music Cargando</h1>
        </>
    );
}