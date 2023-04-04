import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let miFav=JSON.parse(localStorage.getItem("token"))

//   let favs= localStorage.getItem ("token")
// let parsedFavs=JSON.parse(favs)
//  console.log(favs);
//  console.log(favs);
 console.log(miFav);

  return (
    <>
      <h1>Dentists Favs</h1>

      
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}

{miFav.map(doctor=>(
  <div className="card"> 
    <img className= "imgDr"src= "./images/doctor.jpg" alt="" />
      <h3>{doctor.id}</h3>
       <h3>{doctor.name}</h3>
       <h3>{doctor.username}</h3>
       </div>
))}
      

        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
