import './Merchandise.css';
import { useNavigate } from 'react-router-dom';

export function Merchandise() {
    const title = "Productos De La Banda";

    /* Activamos La Navegación Entre Componentes Cuando Se De Un Evento */
    let componentsBetweenNavigation = useNavigate();

    function eventReactDetected(selectedProduct) {
        componentsBetweenNavigation('/store',{
            state: {selectedProduct}
        });
    }

    let individualProduct = [
        {
            mainBoxArea: "box__container--areaMain",
            nameBoxOne: "box__one1--main",
            nameBoxTwo: "box__two1--main",
            nameBoxThreeText: "box__container--textPosition1",
            information: {
                name: "Camiseta Original De La Banda",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productOne.jpg?alt=media&token=f3896047-a675-4515-a112-4f8caf443ad8",
                price: 39.99,
                available: "si",
                quantity: 10
            }
        },
        {
            mainBoxArea: "box__container--areaMain",
            nameBoxOne: "box__one2--main",
            nameBoxTwo: "box__two2--main",
            nameBoxThreeText: "box__container--textPosition1",
            information: {
                name: "Video Concierto One Direction",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productThree.jpg?alt=media&token=593b1f68-0a2f-44c5-9b58-9facf1591971",
                price: 59.99,
                available: "si",
                quantity: 30
            }
        },
        {
            mainBoxArea: "box__container--areaMain",
            nameBoxOne: "box__one3--main",
            nameBoxTwo: "box__two3--main",
            nameBoxThreeText: "box__container--textPosition1",
            information: {
                name: "Cartuchera Estudiantil",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFour.jpg?alt=media&token=6b573806-5db1-4f58-bca0-5dcc79929bb8",
                price: 9.99,
                available: "si",
                quantity: 40
            }
        },
        {
            mainBoxArea: "box__container--imagePosition1",
            nameBoxOne: "box__one4--main",
            nameBoxTwo: "box__two4--main",
            nameBoxThreeText: "box__container--textPosition2",
            information: {
                name: "Permufe Sauvage One Direction",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFive.jpg?alt=media&token=3ff8459e-26b6-4742-8188-519446a6612a",
                price: 9.99,
                available: "si",
                quantity: 40
            }
        },
        {
            mainBoxArea: "box__container--imagePosition1",
            nameBoxOne: "box__one5--main",
            nameBoxTwo: "box__two5--main",
            nameBoxThreeText: "box__container--textPosition2",
            information: {
                name: "Chompa Negra XL",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSix.jpg?alt=media&token=92d184b2-0638-41a3-ae56-e0ae76be57be",
                price: 29.99,
                available: "si",
                quantity: 50
            }
        },
        {
            mainBoxArea: "box__container--imagePosition1",
            nameBoxOne: "box__one6--main",
            nameBoxTwo: "box__two6--main",
            nameBoxThreeText: "box__container--textPosition2",
            information: {
                name: "Vinilo De La Banda One Direction",
                photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSix.jpg?alt=media&token=92d184b2-0638-41a3-ae56-e0ae76be57be",
                price: 79.99,
                available: "si",
                quantity: 60
            }
        }
    ];

    return (
        <>
            <h1 className="text-center m-5">{title}</h1>
            <main className="container">
                <section className="section__container--two">
                    {
                        individualProduct.map(function(product, index) {
                            return(
                                <div className={product['mainBoxArea']} key={index}>
                                    <div className={product['nameBoxOne']}></div>
                                    <div className={product['nameBoxTwo']}></div>
                                    <div className={product['nameBoxThreeText']}>
                                        <h1 className='title__product'>{product['information']['name']}</h1>
                                        <p>precio: {product['information']['price']}</p>
                                        <p>quantity: {product['information']['quantity']} Unidades</p>
                                        <p>available: {product['information']['available']}</p>
                                        <button className='button__card--product' onClick={
                                            function() {
                                                eventReactDetected(product)
                                            }
                                        }>Ampliar</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </main>
        </>
    );
}