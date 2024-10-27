import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from "axios";

const Detail = () => {
  console.log('RENDERIZANDO DETAIL')
  const params = useParams();

  return (
    <>
      <h1>Detail Dentist {params.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
    </>
  )
}

export default Detail