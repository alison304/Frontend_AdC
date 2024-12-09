// Detail.jsx
import { useNavigate, useLocation, Link } from "react-router-dom";
import StylesDetail from '../styles/Detail.module.css';
import { useMediaQuery, useTheme } from '@mui/material';
import { useProductosStates } from "../utils/Context";
import { useState } from "react";
import Caracteristicas from "../components/Caracteristicas/Caractiristicas";
import CalendarioDetail from "../components/CalendarioDetail";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Obtenemos si el usuario está autenticado
  const isAuthenticated = localStorage.getItem('authToken') ? true : false;

  const { state } = useProductosStates(); // Aquí tenemos las fechas del context (fechaInicial, fechaFinal)
  const producto = location.state.producto;

  const volverHome = () => {
    navigate(-1);
  }

  // Esta función se usará en vista móvil, donde el botón RESERVAR no está dentro de un Link
  const handleReservar = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: 'warning',
        title: 'No estás logueado',
        text: 'Debes iniciar sesión para realizar una reserva o seleccionar fechas.',
        confirmButtonText: 'Ok',
        customClass: {
          popup: 'elSwal'
        }
      });
      return;
    }

    if (state.fechaInicial === null || state.fechaFinal === null) {
      Swal.fire({
        icon: 'warning',
        title: 'Fechas no seleccionadas',
        text: 'Debe seleccionar una fecha inicial y una fecha final antes de reservar.',
        confirmButtonText: 'Ok',
        customClass: {
          popup: 'elSwal'
        }
      });
      return;
    }

    // Si está logueado y las fechas están seleccionadas, redirigimos a la reserva
    navigate(`/reserva/${producto.idProducto}`, { state: { producto } });
  };

  return (
    <>
      <a onClick={volverHome} className={StylesDetail.tituloVolver}>Volver</a>
      <section className={StylesDetail.contenedor}>
        {isMobile && (<h3 className={StylesDetail.nombre}>{producto.nombre}</h3>)}
        
        <div className={StylesDetail.contenedorImg}>
          <img src={producto.imagenes[0].url} className={StylesDetail.imgGrande} alt={producto.nombre}/>

          <div className={StylesDetail.contenedorImgPequeñas}>
            <img src={producto.imagenes[1].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>
            <img src={producto.imagenes[2].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>
            <img src={producto.imagenes[3].url} className={StylesDetail.imgPequeña} alt="imagen producto"/>

            <Link 
              to={{
                pathname: '/gallery/' + producto.idProducto
              }}
              state={{ producto }}>
              <div className={StylesDetail.divImg}>
                <img src={producto.imagenes[0].url} className={StylesDetail.imgPequeñaOpacity} alt="imagen producto"/>
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
              <p className={StylesDetail.descripcion}>{producto.descripcion}</p>
              <h3 className={StylesDetail.precio}>S/.{producto.precio_alquiler}</h3>
              
              <CalendarioDetail 
                noDisponibles={producto.reservas} 
                isAuthenticated={isAuthenticated} 
              />
              <button className={StylesDetail.boton} onClick={handleReservar}>RESERVAR</button>
            </div>
          ) : (
            <div className={StylesDetail.contenedorDetalle}>
              <h3 className={StylesDetail.nombre}>{producto.nombre}</h3>
              <h3 className={StylesDetail.precio}>S/.{producto.precio_alquiler}</h3>
              <h3 className={StylesDetail.tituloDescripcion}>Descripción:</h3>
              <p className={StylesDetail.descripcion}>{producto.descripcion}</p>
              
              <div className={StylesDetail.contenedorReserva}>
                <CalendarioDetail 
                  noDisponibles={producto.reservas}
                  isAuthenticated={isAuthenticated}
                />
                {isAuthenticated ? (
                  state.fechaInicial !== null && state.fechaFinal !== null ? (
                    <Link 
                      to={{
                        pathname: '/reserva/' + producto.idProducto
                      }}
                      state={{ producto }}>
                      <button className={StylesDetail.boton}>RESERVAR</button>
                    </Link>
                  ) : (
                    <button 
                      className={StylesDetail.boton}
                      onClick={() => Swal.fire({
                        icon: 'warning',
                        title: 'Fechas no seleccionadas',
                        text: 'Debe seleccionar una fecha inicial y una fecha final antes de reservar.',
                        confirmButtonText: 'Ok',
                        customClass: {
                          popup: 'elSwal'
                        }
                      })}
                    >
                      RESERVAR
                    </button>
                  )
                ) : (
                  <button 
                    className={StylesDetail.boton}
                    onClick={() => Swal.fire({
                      icon: 'warning',
                      title: 'No estás logueado',
                      text: 'Debes iniciar sesión para realizar una reserva o seleccionar fechas.',
                      confirmButtonText: 'Ok',
                      customClass: {
                        popup: 'elSwal'
                      }
                    })}
                  >
                    RESERVAR
                  </button>
                )}
              </div>
            </div>
          )
        }
      </section>
    </>
  )
}

export default Detail;
