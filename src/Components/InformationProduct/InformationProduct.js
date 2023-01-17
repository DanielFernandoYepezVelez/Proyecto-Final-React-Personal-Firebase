import { Link, useLocation } from 'react-router-dom'

import './InformationProduct.css';

export function InformationProduct() {
    let getData = useLocation();
    let product = getData['state']['selectedProduct'];
    let index = getData['state']['index'];

    return (
        <>
            <div className='container'>
                <div className='row my-5 justify-content-center align-items-center'>
                    <div className='col-12 col-md-6'>
                        <div className='box__container--areaMain'>
                            {
                                (index === 0) ?
                                    <>
                                        <div className='box__one1INFO--main'></div>
                                        <div className='box__two1INFO--main'></div>
                                    </>
                                    : (index === 1) ?
                                        <>
                                            <div className='box__one2INFO--main'></div>
                                            <div className='box__two2INFO--main'></div>
                                        </>
                                        : (index === 2) ?
                                            <>
                                                <div className='box__one3INFO--main'></div>
                                                <div className='box__two3INFO--main'></div>
                                            </>
                                            : (index === 3) ?
                                                <>
                                                    <div className='box__one4INFO--main'></div>
                                                    <div className='box__two4INFO--main'></div>
                                                </>
                                                : (index === 4) ?
                                                    <>
                                                        <div className='box__one5INFO--main'></div>
                                                        <div className='box__two5INFO--main'></div>
                                                    </>
                                                    :
                                                    <>
                                                        <div className='box__one6INFO--main'></div>
                                                        <div className='box__two6INFO--main'></div>
                                                    </>
                            }
                        </div>
                        <Link to="/merchandise">
                            <input type="button" className='button__card--product2' value="Regresar" />
                        </Link>
                        {/* <img className='img-fluid w-100' src={product['information']['photo']} alt='imageProduct'/> */}
                    </div>
                    <div className='col-12 col-md-4 borderProduct p-4'>
                        <h2 className='fw-bold text-center'> {product['information']['name']} </h2>
                        <h1 className='mt-3 display-1'>${product['information']['price']} <span className='displa-4 discount'>20% off</span></h1>

                        <p>{product['information']['quantity']} Unidades</p>
                        <p>Disponible: {product['information']['available']} </p>

                        <span className='badge text-bg-primary'>Descuento Del Dia</span>
                        <p>Hasta 48 Cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/visa.png?alt=media&token=08b4ad6a-65ea-452f-9c4c-84d38efeacf3' alt='logoVisa' />
                        <img className='ms-3' src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/american-express.png?alt=media&token=f84efa31-d1a0-4650-a974-17cbbae41f38' alt='logoAmericanExpress' />

                        <br />
                        <div className='d-flex align-items-center'>
                            <img className='me-2' src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/track.png?alt=media&token=2d25a698-1563-4b0f-ac3c-ad1633d20611' alt='logoTrack' />
                            <p className='text-success fw-bold'>Envio Gratis A Nivel Nacional</p>
                        </div>
                        <p>Conoce Tiempos Y Formas De Envio.</p>

                        <div className='d-flex align-items-center'>
                            <img className='me-2' src='https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/exchange.png?alt=media&token=126be718-c439-4a5a-a310-c9c7fb6a4dda' alt='logoTrack' />
                            <p className='text-success fw-bold'>Devolución Gratis</p>
                        </div>
                        <p>30 Días Para Reembolso.</p>
                        <div>
                            <p>{product['information']['description']}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <h1>{product['information']['name']}</h1> */}
        </>
    )
}