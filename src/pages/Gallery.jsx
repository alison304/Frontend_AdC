import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StylesGallery from '../styles/Gallery.module.css'
import { useMediaQuery, useTheme } from '@mui/material';


const Gallery = ({ }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const producto = location.state.producto;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const volverHome = () => {
    navigate(-1);
  }
  return (
    <div>
      <a onClick={volverHome} className={StylesGallery.tituloVolver}>Volver</a>
      {isMobile ?
        ( <div className={StylesGallery.contenedorMobile}>
          <img src={producto.imagenes} />
          <img src={producto.imagenes} />
          <img src={producto.imagenes} />
          <img src={producto.imagenes} />
          <img src={producto.imagenes} />
        </div>) : (
          <div>
            <div className={StylesGallery.contenedor}>
              <img src={producto.imagenes} />
              <div className={StylesGallery.columna}>
                <img src={producto.imagenes} />
                <img src={producto.imagenes} />
              </div>
            </div>
            <div className={StylesGallery.contenedor}>
              <img src={producto.imagenes} />
              <div className={StylesGallery.columna}>
                <img src={producto.imagenes} />
              </div>
            </div>
          </div>
        )}
    </div>


  );
};

export default Gallery;
