
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <>
    <Routes>

    <Route path="/" element={<HomePage/>}/>

    <Route path="/cart" element={<CartPage/>}/>

    <Route path="/product" element={<ProductDetailsPage/>}/>

    <Route path="/category" element={<CategoryPage/>}/>

    </Routes>
    </>
  )
}

export default App
