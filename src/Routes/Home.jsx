import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { doctors } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {doctors.length
          ? doctors.map((doctor) => (
              <Link key={doctor.id} to={"/dentista/" + doctor.id}>
                <Card doctor={doctor} />
              </Link>
            ))
          : null}
      </div>
    </main>
  );
};

export default Home;
