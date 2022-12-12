import { useLocation } from 'react-router-dom'

export function InformationProduct() {
    let getData = useLocation();
    let product = getData['state']['selectedProduct'];

    console.log(product);

    return(
        <>
            <h1>{product['information']['name']}</h1>
        </>
    )
}