import ProductItem from './productitem.jsx';

// could recall this ProductList
function Products(props){

    function removeItem(deleteItemID){
        let newData = props.displayData.filter(item => item.id !== deleteItemID)
        props.setDisplayData(newData);
    }

    return (
    <div className="products">
        {props.displayData.map(product => {
            if(product.category === "smartphones" || product.category === "laptops") return <ProductItem key={product.id} itemdata={product} deleteItem={removeItem}/>
        })}
    </div>
    )
}

export default Products;