import ProductItem from './productitem.jsx';

function Products(props){
    console.log(props.data);
    return (
    <div className="products">
        {props.data.map(product => {
            if(product.price <= 20) return <ProductItem itemdata={product}/>
        })}
    </div>
    )
}

export default Products;