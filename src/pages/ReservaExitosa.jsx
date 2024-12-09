import React from 'react'
import StylesReservaExitosa from '../styles/ReservaExitosa.module.css'
import { useLocation, Link} from "react-router-dom";
import {useProductosStates} from "../utils/Context"

function ReservaExitosa() {

    const {dispatch} = useProductosStates();
    const location = useLocation();
    const {
        producto,
        nombreUsuario,
        emailUsuario,
        fechaInicial,
        fechaFinal,
        totalPrecio
    } = location.state || {}; // Aquí accedemos a todos los datos que pasamos
    

    console.log("reserva Exitosa", producto)

    const borrarFechas = () => {
        dispatch({type:"REMOVE_FECHA_INICIAL", payload:null});
        dispatch({type:"REMOVE_FECHA_FINAL", payload:null});
      }
    
  return (
  <>
      <Link to={{
        pathname: '/detail/' + producto.idProducto
      }}
        state={{ producto }}
        >
        <a onClick={borrarFechas} className={StylesReservaExitosa.tituloVolver}>Volver</a>
      </Link>
    <section className={StylesReservaExitosa.principal}>
    <p className={StylesReservaExitosa.titulo}>Ya esta lista tu reserva</p>
    <article className={StylesReservaExitosa.articulo}>
        <div className={StylesReservaExitosa.div1}>
            <div className={StylesReservaExitosa.div1_1}> 
                <p className={StylesReservaExitosa.nombreProducto}>{producto.nombre}</p>
            </div>
            <div className={StylesReservaExitosa.div1_imagenes}>
                <img src={producto.imagenes[0].url} className={StylesReservaExitosa.imagen} />
                <img src={producto.imagenes[1].url} className={StylesReservaExitosa.imagen} />
                <img src={producto.imagenes[2].url} className={StylesReservaExitosa.imagen} />
                <img src={producto.imagenes[3].url} className={StylesReservaExitosa.imagen} />
            </div>

            <div className={StylesReservaExitosa.div1_fechas}>
                <div className={StylesReservaExitosa.div1_2_desde}>                  
                    <p className={StylesReservaExitosa.fechasSeleccionada}>Desde</p>
                    <p className={StylesReservaExitosa.fechasSeleccionada}>{fechaInicial}</p>             
                </div>
                <div className={StylesReservaExitosa.div1_2_hasta}>                  
                    <p className={StylesReservaExitosa.fechasSeleccionada}>Hasta</p>
                    <p className={StylesReservaExitosa.fechasSeleccionada}>{fechaFinal}</p>             
                </div>
            </div>
            
        </div>
        <div className={StylesReservaExitosa.div2}>
            <p className={StylesReservaExitosa.informacion}>Información del usuario</p>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.nombre}>Nombre</p>    
                <p className={StylesReservaExitosa.datosUsuario}>{nombreUsuario}</p>
            </div>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.correo}>Correo</p>
                <p className={StylesReservaExitosa.datosUsuario}>{emailUsuario}</p>
            </div>
        </div>
        
        <div className={StylesReservaExitosa.div2}>
            <p className={StylesReservaExitosa.informacion}>Politicas del producto</p>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.datosPoliticas}>Politicas de cancelación</p>    
            </div>
        </div>

        <div className={StylesReservaExitosa.div3}>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.informacion2}>Total(Soles)</p>   
                <p className={StylesReservaExitosa.datosUsuario}>S/ {totalPrecio}</p>
            </div>
        </div>            
    </article>
</section>
</>
  )
}

export default ReservaExitosa