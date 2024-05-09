import { useParams, Link } from 'react-router-dom'

function ProductDetails(props){

    const {productID} = useParams();

    console.log(productID)

    const product = props.displayData.find(element => element.id === parseInt(productID))
    

    console.log(product)

    return(
        <div className="product-details"> 
        <h3>{product.brand} - {product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price} ({product.discountPercentage}% discount)</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock} items</p>
        <p>Category: {product.category}</p>
        <p><img src={product.images[0]}/></p>
        <Link to={`/`}><button className="back-btn">Back to Overview</button></Link>


        </div>

    )

}

export default ProductDetails;