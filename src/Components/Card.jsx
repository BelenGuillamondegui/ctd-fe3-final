import React from "react";
import { Link } from 'react-router-dom'
import Detail from "../Routes/Detail";
import { useContextGlobal } from "./utils/global.context";




const Card = ({doctor}) => {
  // console.log(doctor);
 
  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage

let miFav=JSON.parse(localStorage.getItem("token")) || [];
miFav.push(doctor)

console.log(doctor);
   let arrayJson= JSON.stringify(miFav) 
   localStorage.setItem("token", arrayJson)
console.log(miFav);

alert("Has agregado correctamente al profesional " + doctor.name + " como favorito")
  }
 
  return (
    <> 
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img className= "imgDr"src= "./images/doctor.jpg" alt="" />
      <h3>{doctor.id}</h3>
       <h3>{doctor.name}</h3>
       <h3>{doctor.username}</h3>

    </div>  {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
    <div>
        
        <button onClick={addFav} className="favButton">Add fav⭐</button>
        </div>
        
    </>
  );
 
  
};

export default Card;
