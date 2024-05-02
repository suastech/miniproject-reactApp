import { Link } from "react-router-dom";

// could recall this ProductSummary
function ProductItem(props){
    return (
    <> 
    <p>{props.itemdata.title} (add small picture and price)</p>
    <p><Link to={`/products/${props.itemdata.id}`}>Details</Link><button onClick={() => {props.deleteItem(props.itemdata.id)}}>Delete</button></p>
    </>
    )
}

export default ProductItem;