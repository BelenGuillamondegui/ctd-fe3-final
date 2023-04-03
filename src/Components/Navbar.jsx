import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
// import React, {useReducer} from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
 
    <nav className='nav'>
        <img classname= "dh" src= "./DH.ico" alt='Digital House logo' />

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
         <Link to='/'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/favs'><h3>favoritos</h3></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>

  )
}

export default Navbar