import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const getDetail = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setDetail(data);
  };
  console.log(detail);
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <h1>Detail Dentist id: {detail.id}</h1>
      <table className="table">
        <tr>
          <th>Nombre </th>
          <th>Email </th>
          <th>Phone </th>
          <th>Website </th>
        </tr>
        <tr>
          <td>{detail.name}</td>
          <td>{detail.email}</td>
          <td>{detail.phone}</td>
          <td>{detail.website}</td>
        </tr>

        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </table>
    </div>
  );
};

export default Detail;
