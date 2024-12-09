// Detail.jsx
import { useNavigate, useLocation } from "react-router-dom";
import StylesDetail from '../styles/Detail.module.css';
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";
import Caracteristicas from "../components/Caracteristicas/Caractiristicas";
import CalendarioDetail from "../components/CalendarioDetail";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Aquí deberías obtener el estado real de autenticación desde tu contexto o lógica real
  // Ejemplo:
  // const { isAuthenticated } = useAuth();
  // Para este ejemplo asumiremos una variable (cambiar a tu lógica real):
  const isAuthenticated = localStorage.getItem('authToken') ? true : false;

  const volverHome = () => {
    navigate(-1);
  }

  const producto = location.state.producto;
  console.log("desde detail", location.state.producto.reservas)

  const handleReservar = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'warning',
        title: 'No estás logueado',
        text: 'Debes iniciar sesión para realizar una reserva o seleccionar fechas.',
        confirmButtonText: 'Ok'
      })
    } else {
      // Aquí iría la lógica para reservar si estuviera implementada. Por ahora, solo log:
      console.log("Reservando...");
    }
  }

  return (
    <>
      <a onClick={volverHome} className={StylesDetail.tituloVolver}>Volver</a>
      <section className={StylesDetail.contenedor}>
        {isMobile && (<h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>)}
        
        <div className={StylesDetail.contenedorImg}>
          <img src={location.state.producto.imagenes[0].url} className={StylesDetail.imgGrande} alt={location.state.producto.nombre}/>

          <div className={StylesDetail.contenedorImgPequeñas}>
            <img src={location.state.producto.imagenes[1].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>
            <img src={location.state.producto.imagenes[2].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>
            <img src={location.state.producto.imagenes[3].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>

            <Link 
              to={{
                pathname: '/gallery/' + location.state.producto.idProducto
              }}
              state={{ producto }}>
              <div className={StylesDetail.divImg}>
                <img src={location.state.producto.imagenes[0].url} className={StylesDetail.imgPequeñaOpacity} alt="imagen producto"/>
                {isMobile ? (<p className={StylesDetail.textImg}>Ver Más</p>) : (<p className={StylesDetail.textImg}>Ver todas las fotos</p>)}
              </div>
            </Link>
          </div>

          <div>
            {
              !isMobile && (
                <>
                  <h4>Características:</h4>
                  <Caracteristicas idProducto={producto.idProducto}></Caracteristicas>
                </>
              )
            }
          </div>
        </div>

        {
          isMobile ? (
            <div className={StylesDetail.contenedorDetalle}>
              <h3 className={StylesDetail.tituloDescripcion}>Descripción:</h3>
              <p className={StylesDetail.descripcion}>{location.state.producto.descripcion}</p>
              <h3 className={StylesDetail.precio}>S/.{location.state.producto.precio_alquiler}</h3>
              
              <CalendarioDetail 
                noDisponibles={location.state.producto.reservas} 
                isAuthenticated={isAuthenticated} 
              />
              <button className={StylesDetail.boton} onClick={handleReservar}>RESERVAR</button>
            </div>
          ) : (
            <div className={StylesDetail.contenedorDetalle}>
              <h3 className={StylesDetail.nombre}>{location.state.producto.nombre}</h3>
              <h3 className={StylesDetail.precio}>S/.{location.state.producto.precio_alquiler}</h3>
              <h3 className={StylesDetail.tituloDescripcion}>Descripción:</h3>
              <p className={StylesDetail.descripcion}>{location.state.producto.descripcion}</p>
              
              <div className={StylesDetail.contenedorReserva}>
                <CalendarioDetail 
                  noDisponibles={location.state.producto.reservas}
                  isAuthenticated={isAuthenticated}
                />
                <button className={StylesDetail.boton} onClick={handleReservar}>RESERVAR</button>
              </div>
            </div>
          )
        }
      </section>
    </>
  )
}

export default Detail;
