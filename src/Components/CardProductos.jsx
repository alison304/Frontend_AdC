import React from 'react'
import StylesListaProductos from '../Styles/ListaProductos.module.css'
import { Link } from "react-router-dom";

function CardProductos({producto}) {
  return (
    <div className={StylesListaProductos.card}>
    <Link to={{
      pathname: '/detail/'+producto.id
    }} 
    state = {{producto}}
    className={StylesListaProductos.link}>
        <img src={producto.imagenes} className={StylesListaProductos.cardImg}/> 
    </Link>
    <div className={StylesListaProductos.datos}>
        <h3 className={StylesListaProductos.nombreProducto} >{producto.nombre}</h3>
        <h3 className={StylesListaProductos.descripcionProducto} >{producto.descripcion}</h3>
        <h3 className={StylesListaProductos.precioProducto} >S/.{producto.precioAlquiler}</h3>
    </div>
   </div> 
  )
}

export default CardProductos
