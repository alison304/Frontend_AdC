import { useNavigate, useLocation } from "react-router-dom";
import React from 'react'
import StylesDetail from '../Styles/Detail.module.css'
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";

const Detail = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const volverHome = () => {
    navigate(-1);
  }
  const [contador, setContador] = useState(1);

  const actualizarContador = (valor) => {
    if ((contador + valor) > -1) {
      setContador(contador + valor)
    }
  }
  const producto = location.state.producto;
  return (
    <>
      <a onClick={volverHome} className={StylesDetail.tituloVolver}>Volver</a>
      <section className={StylesDetail.contenedor}>
        {

          isMobile ? (<h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>) : (<></>)
        }
        <div className={StylesDetail.contenedorImg}>
          <img src={location.state.producto.imagenes} className={StylesDetail.imgGrande} />

          <div className={StylesDetail.contenedorImgPequeñas}>
            <img src={location.state.producto.imagenes} className={StylesDetail.imgPequeña} />
            <img src={location.state.producto.imagenes} className={StylesDetail.imgPequeña} />
            <img src={location.state.producto.imagenes} className={StylesDetail.imgPequeña} />

            <Link to={{
              pathname: '/gallery/' + location.state.producto.id
            }}
              state={{ producto }}>
              <img src={location.state.producto.imagenes} className={StylesDetail.imgPequeña} />
            </Link>

          </div>
        </div>
        {
          isMobile ? (<div className={StylesDetail.contenedorDetalle}>
            <p className={StylesDetail.descripcion}> {location.state.producto.descripcion}</p>
            <div className={StylesDetail.contenedorAñadir}>
              <button className={StylesDetail.botonMenos} onClick={() => { actualizarContador(-1) }}>-</button>
              <div className={StylesDetail.cantidad}>{contador}</div>
              <button className={StylesDetail.botonMas} onClick={() => { actualizarContador(1) }} >+</button>
            </div>
            <h3 className={StylesDetail.precio}>S/.{location.state.producto.precioAlquiler}</h3>

            <button className={StylesDetail.boton}>Añadir al Carrito</button>
          </div>) :

            (<div className={StylesDetail.contenedorDetalle}>
              <h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>
              <h3 className={StylesDetail.precio}>S/.{location.state.producto.precioAlquiler}</h3>
              <h3 className={StylesDetail.disponible}>Disponible: {location.state.producto.disponibilidad}</h3>
              <h3 className={StylesDetail.disponible}>Cantidad</h3>
              <div className={StylesDetail.contenedorAñadir}>
                <button className={StylesDetail.botonMenos} onClick={() => { actualizarContador(-1) }} >-</button>
                <div className={StylesDetail.cantidad}>{contador}</div>
                <button className={StylesDetail.botonMas} onClick={() => { actualizarContador(1) }} >+</button>
              </div>
              <button className={StylesDetail.boton}>AÑADIR AL CARRO</button>
              <h3 className={StylesDetail.tituloDescripcion}>Descripción:</h3>
              <p className={StylesDetail.descripcion}> {location.state.producto.descripcion}</p>
            </div>)
        }
      </section>

    </>
  )
}

export default Detail