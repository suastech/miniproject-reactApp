import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(props){

    const navigate = useNavigate();

    const [newItem, setNewItem] = useState({});

    const arrayOfIds = props.displayData.map ( element => element.id)
    const biggestId = Math.max(... arrayOfIds)
    console.log(biggestId)

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
        navigate(`/products/${newItem.id}`)
        console.log(newDisplayData)
    }


    function handleSubmit(e) {
        e.preventDefault();
        addItem();
    }
    

    // addItem()

    return (
        <div className="add-product">
            <form onSubmit={handleSubmit} className="edit-form">
            <h4>Add Product</h4>
            <div className="form-wrapper">
                <div className="labels">
                        <label for="title">Title</label>
                        <label for="description">Description</label>
                        <label for="price">Price ($)</label>
                        <label for="discountPercentage">Discount (%)</label>
                        <label for="rating">Rating (1-5)</label>
                        <label for="stock">Stock (# items)</label>
                        <label for="brand">Brand</label>
                        <label for="category">Category</label>
                        <label for="images">Image (URL)</label>
                    </div>
                <div className="inputs">
              <input name="title" id="title" type="text" onChange={handleChange} placeholder="Title" required/>
              <input name="description" id="description" type="text" onChange={handleChange} placeholder="Description" required />
              <input name="price" id="price" type="number" onChange={handleChange} placeholder="Price in $" required/>
              <input name="discountPercentage" id="discountPercentage" min="0" max="100" step=".01" type="number" onChange={handleChange} placeholder="Discount in %" required />
              <input name="rating" type="number" id="rating" min="1" max="5" step=".01" onChange={handleChange} placeholder="Rating" required/>
              <input name="stock" type="number" id="stock" min="0" step="1" onChange={handleChange} placeholder="Stock" required/>
              <input name="brand" type="text" id="brand" onChange={handleChange} placeholder="Brand" required/>
              <select name="category" id="category" onChange={handleChange} required>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
              </select>
              <input name="images" id="images" type="url" onChange={handleImage} placeholder="Image URL" required/>
              </div>
            </div>
            <button>Add Product</button>
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

export default AddProduct;