import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
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
