import { useParams } from 'react-router-dom'
// import ProductData from '../products.json'; 
// we cannot use props from a sibling, so i need to reimport or get it from app.jsx

function ProductDetails(props){

    // we are getting an object from useParams()

    // let result = useParams()
    // let ProductID = result.ProductID

    const {productID} = useParams();

    console.log(productID)

    const product = props.displayData.find(element => element.id === parseInt(productID))
    

    console.log(product)

    return(
        <div className="product-details"> 
        {/* need to add styles to that class */}
        <h3>{product.brand} - {product.title}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}$ ({product.discountPercentage}% discount)</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock} items</p>
        <p>Category: {product.category}</p>
        <p><img src={product.images[0]}/></p>

        </div>

    )

}

export default ProductDetails;