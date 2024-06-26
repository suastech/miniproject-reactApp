import { Link } from "react-router-dom";
import image404 from "/404.png"

// could recall this ProductSummary
function ProductItem(props){
    
    const imageErrorHandler = (e) => {
        e.target.src = image404;
    }

    return (
    
    <div className="item-container">
        {props.itemdata.images[0] ? <img src={props.itemdata.images[0]} onError={imageErrorHandler}/> : <img src="../logo.png"/>}
        <p style={{width:'200px'}}>{props.itemdata.title}</p>
        <p>${props.itemdata.price}</p>
        <div>
            <Link to={`/products/${props.itemdata.id}`}><button>Details</button></Link>
            <Link to={`/products/edit/${props.itemdata.id}`}><button>Edit</button></Link>
            <button onClick={() => {props.deleteItem(props.itemdata.id)}}>Delete</button>
        </div>
    </div>
    
    )
}

export default ProductItem;