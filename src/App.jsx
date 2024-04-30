import { useState } from 'react'
import viteLogo from '/vite.svg'
import ProductData from './products.json'
import Products from './components/products.jsx';
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import Footer from './components/footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(ProductData);

  return (
    <>
      <Navbar/>
      <div className="main-view">
      <Sidebar/>
      <Products data={ProductData}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
