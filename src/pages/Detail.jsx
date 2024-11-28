import { useNavigate, useLocation } from "react-router-dom";
import StylesDetail from '../styles/Detail.module.css'
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";
import Caracteristicas from "../components/Caracteristicas/Caractiristicas";
import CalendarioDetail from "../components/CalendarioDetail";
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
  console.log("desde detail", location.state.producto.reservas)
  
  return (
    <>
      <a onClick={volverHome} className={StylesDetail.tituloVolver}>Volver</a>
      <section className={StylesDetail.contenedor}>
        {

          isMobile ? (<h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>) : (<></>)
        }
        <div className={StylesDetail.contenedorImg}>
          <img src={location.state.producto.imagenes[0].url} className={StylesDetail.imgGrande} />

          <div className={StylesDetail.contenedorImgPequeñas}>
            <img src={location.state.producto.imagenes[1].url} className={StylesDetail.imgPequeña} />
            <img src={location.state.producto.imagenes[2].url} className={StylesDetail.imgPequeña} />
            <img src={location.state.producto.imagenes[3].url} className={StylesDetail.imgPequeña} />

            <Link to={{
              pathname: '/gallery/' + location.state.producto.id
            }}
              state={{ producto }}>
              <div className={StylesDetail.divImg}>
                <img src={location.state.producto.imagenes[0].url} className={StylesDetail.imgPequeñaOpacity} />
                {
                  isMobile ? (<p className={StylesDetail.textImg}>Ver Más</p>) : (<p className={StylesDetail.textImg}>Ver todas las fotos</p>)
                }
              </div>
            </Link>
          </div>
          <div>
                <h4>Características:</h4>
                <Caracteristicas idProducto={producto.id}></Caracteristicas>
          </div>
        </div>
        {
          isMobile ? (
            <div className={StylesDetail.contenedorDetalle}>
              <p className={StylesDetail.descripcion}> {location.state.producto.descripcion}</p>
              <div className={StylesDetail.contenedorAñadir}>
                <button className={StylesDetail.botonMenos} onClick={() => { actualizarContador(-1) }}>-</button>
                <div className={StylesDetail.cantidad}>{contador}</div>
                <button className={StylesDetail.botonMas} onClick={() => { actualizarContador(1) }} >+</button>
              </div>
              <CalendarioDetail noDisponibles={location.state.producto.reservas}/>

              <h3 className={StylesDetail.precio}>S/.{location.state.producto.precioAlquiler}</h3>

              <button className={StylesDetail.boton}>Añadir al Carrito</button>
            </div>) :

            (<div className={StylesDetail.contenedorDetalle}>
              <h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>
              <h3 className={StylesDetail.precio}>S/.{location.state.producto.precio_alquiler}</h3>
              <h3 className={StylesDetail.disponible}>Disponible: {location.state.producto.disponibilidad}</h3>
              <h3 className={StylesDetail.disponible}>Cantidad</h3>
              <div className={StylesDetail.contenedorAñadir}>
                <button className={StylesDetail.botonMenos} onClick={() => { actualizarContador(-1) }} >-</button>
                <div className={StylesDetail.cantidad}>{contador}</div>
                <button className={StylesDetail.botonMas} onClick={() => { actualizarContador(1) }} >+</button>
              </div>
              <CalendarioDetail noDisponibles={location.state.producto.reservas}/>
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