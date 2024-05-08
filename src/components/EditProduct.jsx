import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct(props){

    const navigate = useNavigate();

    const {productID} = useParams();

    //console.log(productID)

    const product = props.displayData.find(element => element.id === parseInt(productID))

    //console.log(product)

    const [newItem, setNewItem] = useState({...product});

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

      function editItem () {
        let id = parseInt(productID)
        console.log(props.displayData[0])

        const foundElement = props.displayData.findIndex( element => element.id === id);

        const newArray = [... props.displayData]; 
        newArray.splice(foundElement,1, newItem);
        console.log(newArray)
        props.setDisplayData(newArray);
        navigate(`/products/${productID}`)
      }


    function handleSubmit(e) {
        e.preventDefault();
        editItem();
    }
    
    return (
        <div className="add-product">
            <form onSubmit={handleSubmit} className="edit-form">
              <h4>Introduce the new values</h4>
              <input name="title" type="text" onChange={handleChange} placeholder={product.title} />
              <input name="description" type="text" onChange={handleChange} placeholder={product.description} />
              <input name="price" type="number" onChange={handleChange} placeholder={product.price} />
              <input name="discountPercentage" type="number" onChange={handleChange} placeholder={product.discountPercentage} />
              <input name="rating" type="number" onChange={handleChange} placeholder={product.rating} />
              <input name="stock" type="number" onChange={handleChange} placeholder={product.stock} />
              <input name="brand" type="text" onChange={handleChange} placeholder={product.brand} />
              <select name="category" onChange={handleChange}>
                <option value="smartphones" selected={product.category == "smartphones"}>Smartphones</option>
                <option value="laptops" selected={product.category == "laptops"}>Laptops</option>
              </select>
              {/* <input name="category" type="text" onChange={handleChange} placeholder={product.category} /> */}
              <input name="thumbnail" type="url" onChange={handleChange} placeholder={product.thumbnail} />
              <input name="images" type="url" onChange={handleImage} placeholder={product.images} />             
              <button>Save changes</button>
            </form>
        </div>
    )
}

//Original version of the inputs with "value": 
{/* <input name="description" type="text" value ={product.description} onChange={handleChange} placeholder="Description" />
              <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price in $" />
              <input name="discountPercentage" value={product.discountPercentage} type="number" onChange={handleChange} placeholder="Discount in %" />
              <input name="rating" type="number" value={product.rating} onChange={handleChange} placeholder="Rating" />
              <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" />
              <input name="brand" type="text" value={product.brand} onChange={handleChange} placeholder="Brand" />
              <input name="category" type="text" value={product.category} onChange={handleChange} placeholder="Category" />
              <input name="thumbnail" type="url" value={product.thumbnail} onChange={handleChange} placeholder="Thumbnail URL" />
              <input name="images" type="url" value={product.images} onChange={handleImage} placeholder="Image URL" /> */}

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