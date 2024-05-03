import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import viteLogo from '/vite.svg'
import Products from './components/products.jsx';
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Footer from './components/footer.jsx'
import ProductDetails from './components/productdetails.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="main-view">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/about" element={<p>About us</p>}/>        
        <Route path="*" element={<p>Sorry, this page does not exist.</p>}/>
        <Route path="/products/:productID" element={<ProductDetails/>}/>
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
