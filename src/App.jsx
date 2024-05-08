import {Routes, Route} from 'react-router-dom'
import Products from './components/products.jsx';
import AddProduct from './components/AddProduct.jsx';
import EditProduct from './components/EditProduct.jsx';
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Footer from './components/footer.jsx'
import ProductDetails from './components/productdetails.jsx'
import './App.css'
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import ProductData from './products.json';
import { useState } from 'react';

function App() {
  const [displayData, setDisplayData] = useState(ProductData);

  return (
  <>
    <Navbar/>

      <div className="main-view">
        <Sidebar/>

        <Routes>
          <Route path="/" element={<Products displayData={displayData} setDisplayData={setDisplayData}/>}/>
          <Route path="/about" element={<About/>}/>        
          <Route path="/addproduct" element={<AddProduct displayData={displayData} setDisplayData={setDisplayData}/>}/> 
          <Route path="*" element={<NotFound/>}/>
          <Route path="/products/:productID" element={<ProductDetails displayData={displayData}/>}/>
          <Route path="/products/edit/:productID" element={<EditProduct displayData={displayData} setDisplayData={setDisplayData}/>}/>
        </Routes>

      </div>

    <Footer/>
  </>
  )
}

export default App
