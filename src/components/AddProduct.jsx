import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(props){

    const navigate = useNavigate();

    const [newItem, setNewItem] = useState({});

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
    }


    function handleSubmit(e) {
        e.preventDefault();
        addItem();
    }
    

    return (
        <div className="add-product">
            <form onSubmit={handleSubmit} className="edit-form">
            <h4>Enter Product Details</h4>
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
              <input name="title" id="title" type="text" onChange={handleChange} placeholder="iPhone 12" required/>
              <input name="description" id="description" type="text" onChange={handleChange} placeholder="ultra-long battery life" required />
              <input name="price" id="price" type="number" onChange={handleChange} placeholder="499" required/>
              <input name="discountPercentage" id="discountPercentage" min="0" max="100" step=".01" type="number" onChange={handleChange} placeholder="43" required />
              <input name="rating" type="number" id="rating" min="1" max="5" step=".01" onChange={handleChange} placeholder="4.5" required/>
              <input name="stock" type="number" id="stock" min="0" step="1" onChange={handleChange} placeholder="20" required/>
              <input name="brand" type="text" id="brand" onChange={handleChange} placeholder="Apple" required/>
              <select name="category" id="category" defaultValue="" onChange={handleChange} required>
                <option value="" disabled>---</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
              </select>
              <input name="images" id="images" type="url" onChange={handleImage} placeholder="Enter Image URL" required/>
              </div>
            </div>
            <button>Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct;