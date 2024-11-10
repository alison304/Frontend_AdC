import React from "react";
import StylesHome from '../styles/Home.module.css'
import { Link } from "react-router-dom";

const Card = ({ dato, esCategoria, productos }) => {

  console.log('RENDERIZANDO CARD')

  let productoCategoria={};
  if (esCategoria){
    for (const producto of productos) {

      if (producto.categoria.id== dato.id) {
        productoCategoria=producto;

        break; // Detenemos el recorrido 
      }
  }
       
  }
  console.log('productoCategoria',productoCategoria); 


  return (
    <div className={StylesHome.card}>
      {esCategoria ? (
        <>
          <Link to={'/listaProductos/' + dato.id} className={StylesHome.link}>
            <h3 className={StylesHome.nombreCategorias} >{dato.descripcion}</h3>
            <img src={productoCategoria.imagenes[0].url} className={StylesHome.cardImg} />
          </Link>
        </>
      ) : (
        <>
          <Link to={{
            pathname: '/detail/' + dato.id
          }}
            state={{ productos }} className={StylesHome.link}>
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
