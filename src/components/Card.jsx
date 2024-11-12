import React from "react";
import StylesHome from '../styles/Home.module.css'
import { Link } from "react-router-dom";

const Card = ({ dato, esCategoria, productos }) => {

  console.log('RENDERIZANDO CARD')
  const calificaciones = [4.8,4.5,4.2];
  const producto=dato;

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
            state={{ producto }} className={StylesHome.link}>
            <h3 className={StylesHome.nombreCategorias} >{dato.nombre}</h3>
            <img src={dato.imagenes[0].url} className={StylesHome.cardImg} />
          </Link>
          <div className={StylesHome.recomendacionesPiezas}>
            <span className={StylesHome.piezas}>S/.{dato.precio_alquiler}</span>
            <span className={StylesHome.calificacion}>{calificaciones[dato.id -1]}⭐</span>
          </div>
        </>
      )}

    </div>


  );
};

export default Card;
