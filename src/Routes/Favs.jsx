import React, { useEffect, useState } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
let miFav = JSON.parse(localStorage.getItem("token"));

const Favs = () => {
  const[info,setInfo]= useState(false);

  let miFav = JSON.parse(localStorage.getItem("token"));
useEffect(() => {

 
}, [miFav])

  return (
    <>
    { miFav ? ( 
      <>
      <h1>Dentists Favs</h1>

      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}

        {miFav.map((doctor) => (
          <div className="card">
            <img className="imgDr" src="./images/doctor.jpg" alt="" />
            <h3>{doctor.id}</h3>
            <h3>{doctor.name}</h3>
            <h3>{doctor.username}</h3>
          </div>
        ))}

        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
</>
    
      ): (
            <h1>Aún no has agregado ningún doctor como favorito</h1>
          )
    }
    </>
  );
};

export default Favs;
