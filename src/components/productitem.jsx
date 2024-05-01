function ProductItem(props){
    return <p>{props.itemdata.title}<button onClick={() => {props.deleteItem(props.itemdata.id)}}>Delete</button></p>
}

export default ProductItem;