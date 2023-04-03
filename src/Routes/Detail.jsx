import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState([])
  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id)
     
      const getDetail = async()=>{
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          const data = await res.json()
          setDetail(data)
      }
      console.log(detail);
      useEffect(()=>{
          getDetail()
      }, [])
      


  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <div className='card'>
      <h1>Detail Dentist id </h1>
    <h3>{detail.name}</h3>
    <h3>{detail.email}</h3>
    <h2>{detail.phone}</h2>
    <h2>{detail.website}</h2>

       </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail