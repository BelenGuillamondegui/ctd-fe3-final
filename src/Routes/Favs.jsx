import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  

  let favs= localStorage.getItem ("token")

 console.log(favs);

  return (
    <>
      <h1>Dentists Favs</h1>

      
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}

<h1>{favs}</h1>


        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
