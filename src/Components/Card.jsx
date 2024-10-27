import React from "react";
import StylesHome from '../Styles/Home.module.css'
import { Link } from "react-router-dom";

const Card = ({dato,esCategoria}) => {
  console.log(dato)

  return (
    <div className={StylesHome.card}>
      {esCategoria ? (
      <>
        <h3 className={StylesHome.nombreCategorias} >{dato.nombre}</h3>
        <Link to={'/listaProductos/'+dato.id} className={StylesHome.link}>
        <img src={dato.imagen} className={StylesHome.cardImg}/> 
        </Link>
      </>
      ) : (
        <>
         <h3 className={StylesHome.nombreCategorias} >{dato.nombre}</h3>
         <Link to={'/listaProductos/'+dato.id} className={StylesHome.link}>
        <img src={dato.imagen} className={StylesHome.cardImg}/> 
        </Link>
        <div className={StylesHome.recomendacionesPiezas}>
          <span className={StylesHome.piezas}>{dato.piezas} piezas</span>
          <span className={StylesHome.calificacion}>{dato.calificacion} ⭐</span>
        </div> 
        </>
      )}
        
    </div>

    
  );
};

export default Card;
