import {NavLink} from 'react-router-dom'

function Sidebar(){
    return (
        <div className="sidebar">
            <NavLink to="/">Home</NavLink><br></br>
            <NavLink to="/addproduct">Add Product</NavLink><br></br>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default Sidebar;