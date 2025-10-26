import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="">
      <NavLink to='/'>Inicio</NavLink>
      <NavLink to='/productos'>Productos</NavLink>
      <NavLink to='carrito'>Carrito</NavLink>

    </div>
  )
}
