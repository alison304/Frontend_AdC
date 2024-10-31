import React from "react";
import {  useLocation } from "react-router-dom";
import StylesGallery from '../Styles/Gallery.module.css'
import { useMediaQuery, useTheme } from '@mui/material';


const Gallery = ({ }) => {
  const location = useLocation();
  const producto = location.state.producto;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      {isMobile ? 
      (<div className={StylesGallery.contenedorMobile}>
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
