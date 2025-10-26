import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'

function App() {

  return (
    <>
      <Navbar />
      <h1>Hola mundo</h1>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='productos' element={<Products />} />
        <Route path='carrito' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
