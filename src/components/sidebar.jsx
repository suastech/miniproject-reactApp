import {NavLink} from 'react-router-dom'

function Sidebar(){
    return (
        <div className="sidebar">
            <button><NavLink to="/">Home</NavLink></button><br></br>
            <button><NavLink to="/addproduct" className="nav-btn">Add Product</NavLink></button><br></br>
            <button><NavLink to="/about" className="nav-btn">About</NavLink></button>
        </div>
    )
}

export default Sidebar;