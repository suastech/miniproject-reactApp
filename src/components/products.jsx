import ProductItem from './productitem.jsx';

// could recall this ProductList
function Products(props){

    function removeItem(deleteItemID){
        let newData = props.displayData.filter(item => item.id !== deleteItemID)
        props.setDisplayData(newData);
    }

    return (
    <div className="products">
        {props.displayData.map( (product, index) => {
            if(product.category === "smartphones" || product.category === "laptops") return (
                <div key={index} className={ index %2 === 0? "pale-background": ""}  >
                    <ProductItem  itemdata={product} deleteItem={removeItem}/>
                </div>
            )
        })}
    </div>
    )
}

export default Products;