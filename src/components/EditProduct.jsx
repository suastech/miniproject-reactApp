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
        <div className="edit-product">
            <form onSubmit={handleSubmit} className="edit-form">
              <h4>Edit Product Details</h4>
              <div className="form-wrapper">
                <div className="labels">
                    <label htmlFor="title">Title</label>
                    <label htmlFor="description">Description</label>
                    <label htmlFor="price">Price ($)</label>
                    <label htmlFor="discountPercentage">Discount (%)</label>
                    <label htmlFor="rating">Rating (1-5)</label>
                    <label htmlFor="stock">Stock (# items)</label>
                    <label htmlFor="brand">Brand</label>
                    <label htmlFor="category">Category</label>
                    <label htmlFor="images">Image (URL)</label>
                </div>
                <div className="inputs">
                    <input name="title" id="title" type="text" onChange={handleChange} value={newItem.title} placeholder={product.title} required/>
                    <input name="description" id="description" type="text" onChange={handleChange} value ={newItem.description} required />
                    <input name="price" id="price" type="number" onChange={handleChange} value={newItem.price} required/>
                    <input name="discountPercentage" id="discountPercentage" min="0" max="100" step=".01" type="number" onChange={handleChange} value={newItem.discountPercentage} required />
                    <input name="rating" type="number" id="rating" min="1" max="5" step=".01" onChange={handleChange} value={newItem.rating} required />
                    <input name="stock" type="number" id="stock" min="0" step="1" onChange={handleChange} value={newItem.stock} required />
                    <input name="brand" type="text" id="brand" onChange={handleChange} value={newItem.brand} required/>
                    <select name="category" id="category" defaultValue={newItem.category} onChange={handleChange} required>
                        <option value="smartphones">Smartphones</option>
                        <option value="laptops">Laptops</option>
                    </select>
                    <input name="images" id="images" type="url" onChange={handleImage} value={newItem.images} required/>     
                </div>
              </div>     
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