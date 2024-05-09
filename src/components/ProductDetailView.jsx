import { useParams, Link } from 'react-router-dom'
import image404 from "/404.png"

function ProductDetails(props){

    const {productID} = useParams();

    const product = props.displayData.find(element => element.id === parseInt(productID))

    const imageErrorHandler = (e) => {
        e.target.src = image404;
    }

    return(
        <div className="product-details"> 
        <h3>{product.brand} - {product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price} ({product.discountPercentage}% discount)</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock} items</p>
        <p>Category: {product.category}</p>
        <p><img src={product.images[0]} onError={imageErrorHandler}/></p>
        <Link to={`/`}><button className="back-btn">Back to Overview</button></Link>


        </div>

    )

}

export default ProductDetails;