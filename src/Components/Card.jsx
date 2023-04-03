import React from "react";
// import { Link } from 'react-router-dom'
// import { useContextGlobal } from './utils/global.context'
// import { useState, useEffect } from "react";


const Card = ({doctor}) => {
  // const {doctors} = useContextGlobal()
  console.log(doctor);
 
  const addFav = ()=>{

    // Aqui iria la logica para agregar la Card en el localStorage
  }
 
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <h3>hola{doctor.id}</h3>
       <h3>{doctor.name}</h3>
       <h3>{doctor.username}</h3>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
