import { Link } from "react-router-dom";

// could recall this ProductSummary
function ProductItem(props){
    return (
    
    <div className="item-container">
        <img src={props.itemdata.images[0]}/>
        <p style={{width:'200px'}}>{props.itemdata.title}</p>
        <p>${props.itemdata.price}</p>
        <div>
            <Link to={`/products/${props.itemdata.id}`}><button>Details</button></Link>
            <button onClick={() => {props.deleteItem(props.itemdata.id)}}>Delete</button>
            <Link to={`/products/edit/${props.itemdata.id}`}><button>Edit</button></Link>
        </div>
    </div>
    
    )
}

export default ProductItem;