import './Navbar.css'
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to='/' className='nav-link'>Inicio</NavLink>
      <NavLink to='/productos' className='nav-link'>Productos</NavLink>
      <NavLink to='carrito' className='nav-link cart-button'>Carrito</NavLink>

    </nav>
  )
}
