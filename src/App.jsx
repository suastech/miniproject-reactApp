import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import logo from "/logo.png"
import './App.css'
import ProductList from './components/ProductList.jsx';
import AddProduct from './components/AddProduct.jsx';
import EditProduct from './components/EditProduct.jsx';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ProductDetailView from './components/ProductDetailView.jsx'
import About from './components/About.jsx';
import NotFound from './components/NotFound.jsx';
import ProductData from './assets/products.json';


function App() {
  const [displayData, setDisplayData] = useState(ProductData);

  return (
  <>
    <Navbar logo={logo}/>

      <div className="main-view">
        <Sidebar/>

        <Routes>
          <Route path="/" element={<ProductList displayData={displayData} setDisplayData={setDisplayData}/>}/>
          <Route path="/about" element={<About/>}/>        
          <Route path="/addproduct" element={<AddProduct displayData={displayData} setDisplayData={setDisplayData}/>}/> 
          <Route path="*" element={<NotFound/>}/>
          <Route path="/products/:productID" element={<ProductDetailView displayData={displayData}/>}/>
          <Route path="/products/edit/:productID" element={<EditProduct displayData={displayData} setDisplayData={setDisplayData}/>}/>
        </Routes>

      </div>

    <Footer/>
  </>
  )
}

export default App
