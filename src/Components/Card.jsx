import React from "react";
import StylesHome from '../Styles/Home.module.css'
import { Link } from "react-router-dom";

const Card = ({ dato, esCategoria, producto }) => {
  return (
    <div className={StylesHome.card}>
      {esCategoria ? (
        <>
          <Link to={'/listaProductos/' + dato.id} className={StylesHome.link}>
            <h3 className={StylesHome.nombreCategorias} >{dato.nombre}</h3>
            <img src={dato.imagen} className={StylesHome.cardImg} />
          </Link>
        </>
      ) : (
        <>
          <Link to={{
            pathname: '/detail/' + dato.id
          }}
            state={{ producto }} className={StylesHome.link}>
            <h3 className={StylesHome.nombreCategorias} >{dato.nombre}</h3>
            <img src={dato.imagen} className={StylesHome.cardImg} />
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
