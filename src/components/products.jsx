import ProductItem from './productitem.jsx';
import ProductData from '../products.json';
import { useState } from 'react';

// could recall this ProductList
function Products(){
    const [displayData, setDisplayData] = useState(ProductData);

    function removeItem(deleteItemID){
        let newData = displayData.filter(item => item.id !== deleteItemID)
        setDisplayData(newData);
    }

    return (
    <div className="products">
        {displayData.map(product => {
            if(product.category === "smartphones" || product.category === "laptops") return <ProductItem key={product.id} itemdata={product} deleteItem={removeItem}/>
        })}
    </div>
    )
}

export default Products;