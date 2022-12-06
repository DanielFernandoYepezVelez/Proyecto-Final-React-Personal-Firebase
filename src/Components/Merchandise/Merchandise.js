export function Merchandise() {
    const title = "Productos De La Banda";

    let products = [
        {
            name: "Camiseta Original De La Banda",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productOne.jpg?alt=media&token=f3896047-a675-4515-a112-4f8caf443ad8",
            price: 39.99,
            available: "si",
            quantity: 10
        },
        {
            name: "Crema Dental Colgate",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productTwo.jpg?alt=media&token=ba2db60c-d70c-4126-87e8-9a767548b6cd",
            price: 14.99,
            available: "si",
            quantity: 20
        },
        {
            name: "Video Concierto One Direction",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productThree.jpg?alt=media&token=593b1f68-0a2f-44c5-9b58-9facf1591971",
            price: 59.99,
            available: "si",
            quantity: 30
        },
        {
            name: "Cartuchera Estudiantil",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFour.jpg?alt=media&token=6b573806-5db1-4f58-bca0-5dcc79929bb8",
            price: 9.99,
            available: "si",
            quantity: 40
        },
        {
            name: "Perfume Irresistible",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productFive.jpg?alt=media&token=3ff8459e-26b6-4742-8188-519446a6612a",
            price: 29.99,
            available: "si",
            quantity: 50
        },
        {
            name: "Vinilo De La Banda One Direction",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSix.jpg?alt=media&token=92d184b2-0638-41a3-ae56-e0ae76be57be",
            price: 79.99,
            available: "si",
            quantity: 60
        },
        {
            name: "Chompa XL",
            photo: "https://firebasestorage.googleapis.com/v0/b/reactpersonalspotifyapp.appspot.com/o/productSeven.jpg?alt=media&token=8bf935fa-383e-45d4-945f-24d0ff1870fc",
            price: 18.99,
            available: "si",
            quantity: 70
        },
    ];

    return (
        <>
            <h1 className="text-center m-3">{title}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        products.map(function(product) {
                            return (
                                <>
                                    <div className="col">
                                        <div className="card h-100 shadow">
                                            <img src={product['photo']} alt="ImageProduct" className="img-fluid h-100 w-100"/>
                                            <div className="p-2">
                                                <h2>{product['name']}</h2>
                                                <p>Precio: {product['price']}$</p>
                                                <p>Disponible: {product['available']}</p>
                                                <p>Cantidad: {product['quantity']} Unidades</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}