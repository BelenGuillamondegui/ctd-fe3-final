import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const toggle = () => {
    dispatch({ type: "BTN_TOGGLE" });
  };

  return (
    <nav className="nav">
      <img classname="dhicon" src="./DH.ico" alt="Digital House logo" />

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/contacto">
        <h3>Contacto</h3>
      </Link>
      <Link to="/favs">
        <h3>Favoritos</h3>
      </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="btnTheme" onClick={toggle}>
        {state.theme === "light" ? "🌙 dark" : "🌞 light"} <span />
        mode
      </button>
    </nav>
  );
};

export default Navbar;
