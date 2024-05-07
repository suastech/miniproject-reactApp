import { useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct(props){

    const {productID} = useParams();

    console.log(productID)

    const product = props.displayData.find(element => element.id === parseInt(productID))

    console.log(product)

    // we need to change all the logic below to make a product change
    const [newItem, setNewItem] = useState(product);

    const handleChange = (e) => {
        const newObject = {...newItem}; 
        newObject[e.target.name] = e.target.value;
        setNewItem(newObject)
    }

    const handleImage = (e) => {
        const newObject = {...newItem};
        newObject[e.target.name] = [e.target.value];
        setNewItem(newObject)
      }

    function addItem(){
        let newDisplayData = [...props.displayData]
        let arrayOfIds = props.displayData.map ( element => element.id)
        let itemId = Math.max(... arrayOfIds)+1
        newItem.id = itemId;
        newDisplayData.push(newItem);

        props.setDisplayData(newDisplayData);
        console.log(newDisplayData)
    }


    function handleSubmit(e) {
        e.preventDefault();
        addItem();
    }
    

    // addItem()

    return (
        <div className="add-product">
            <form onSubmit={handleSubmit}>
              <input name="title" type="text" value={product.title} onChange={handleChange} placeholder="Title" /><br/>
              <input name="description" type="text" value ={product.description} onChange={handleChange} placeholder="Description" /><br/>
              <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price in $" /><br/>
              <input name="discountPercentage" value={product.discountPercentage} type="number" onChange={handleChange} placeholder="Discount in %" /><br/>
              <input name="rating" type="number" value={product.rating} onChange={handleChange} placeholder="Rating" /><br/>
              <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" /><br/>
              <input name="brand" type="text" value={product.brand} onChange={handleChange} placeholder="Brand" /><br/>
              <input name="category" type="text" value={product.category} onChange={handleChange} placeholder="Category" /><br/>
              <input name="thumbnail" type="url" value={product.thumbnail} onChange={handleChange} placeholder="Thumbnail URL" /><br/>
              <input name="images" type="url" value={product.images} onChange={handleImage} placeholder="Image URL" /><br/>
                <button>Save changes</button>
            </form>
        </div>
    )
}

// "id": 1,
// "title": "iPhone 9",
// "description": "An apple mobile which is nothing like apple",
// "price": 549,
// "discountPercentage": 12.96,
// "rating": 4.69,
// "stock": 94,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// "images": [
//   "https://www.apfelnews.de/wp-content/uploads/2020/02/iphone-2468714_1920.png",

export default EditProduct;