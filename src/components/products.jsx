import ProductItem from './productitem.jsx';
import ProductData from '../products.json';
import { useState } from 'react';


function Products(){
    console.log(ProductData);

    const [displayData, setDisplayData] = useState(ProductData);

    function removeItem(deleteItemID){
        let newData = displayData.filter(item => item.id !== deleteItemID)
        setDisplayData(newData);
    }

    return (
    <div className="products">
        {displayData.map(product => {
            if(product.price <= 20) return <ProductItem key={product.id} itemdata={product} deleteItem={removeItem}/>
        })}
    </div>
    )
}

export default Products;