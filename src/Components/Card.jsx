import React from "react";
import { Link } from 'react-router-dom'
import Detail from "../Routes/Detail";
import { useContextGlobal } from "./utils/global.context";
// import { useContextGlobal } from './utils/global.context'
// import { useState, useEffect } from "react";



const Card = ({doctor}) => {
  // const {doctors} = useContextGlobal()
  const{setAuth}=useContextGlobal
  const listafav=[]
  console.log(doctor);

  // const showFav=()=>{
  //   let doctorFavParse= localStorage.getItem(doctor, JSON.parse({doctor}))
  //   if (listafav === ""){
  //     listafav.push(JSON.stringify(doctorFavParse))
  //     console.log(listafav);
  //   }
  // }
 
  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
   let doctorfav= localStorage.setItem("token", JSON.stringify(doctor))

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
        
        <button onClick={addFav} className="favButton">Add fav</button>
        </div>
        
    </>
  );
 
  
};

export default Card;
