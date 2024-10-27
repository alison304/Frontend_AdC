import { useParams,useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import StylesDetail from '../Styles/Detail.module.css'

const Detail = () => {

    console.log('RENDERIZANDO DETAIL')
    const navigate = useNavigate();
    const params = useParams();

    const volverHome = () =>{
        navigate(-1);
    }

  return (
    <>
      <a onClick={volverHome} className={StylesDetail.tituloVolver}>Volver</a>

    </>
  )
}

export default Detail