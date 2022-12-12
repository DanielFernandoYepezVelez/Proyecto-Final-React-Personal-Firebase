import './Footer.css';

export function Footer() {
    return (
        <>
            <footer className="footer__container">
                <div class="row">
                    <div className="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/logo-One-Direction.png?alt=media&token=238c973b-ff56-483a-a95f-feee8cec5a65" alt="ImagenLogo" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <h2 className='fw-bold'>SOBRE LA BANDA</h2>
                        <h4>One Direction Es Una Banda Inglesa</h4>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <i class="bi bi-instagram font me-5"></i>
                        <i class="bi bi-tiktok font me-5"></i>
                        <i class="bi bi-facebook font me-5"></i>
                        <i class="bi bi-twitter font me-5"></i>
                        <i class="bi bi-youtube font"></i>
                    </div>
                </div>
            </footer>
        </>
    );
}


/* <div className="container-fluid">
        <div class="row p-5 footer">
            <div className="col-12 col-md-4 align-self-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/logo-One-Direction.png?alt=media&token=238c973b-ff56-483a-a95f-feee8cec5a65" alt="ImagenLogo" className="img-fluid w-100"/>
            </div>
            <div className="col-12 col-md-4 text-center">
                <h2 className='fw-bold'>SOBRE LA BANDA</h2>
                <h4>Banda One Direction Banda Inglesa</h4>
                <br />
                <h2 className='fw-bold'>SOBRE LA BANDA</h2>
                <h4>Banda One Direction Banda Inglesa</h4>
            </div>
            <div className="col-12 col-md-4 align-self-center">
                <i class="bi bi-instagram font me-5"></i>
                <i class="bi bi-tiktok font me-5"></i>
                <i class="bi bi-facebook font me-5"></i>
            </div>
        </div>
    </div> 
*/