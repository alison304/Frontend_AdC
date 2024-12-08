import React from 'react'
import StylesReservaExitosa from '../styles/ReservaExitosa.module.css'

function ReservaExitosa() {
  return (
    <section className={StylesReservaExitosa.principal}>
    <p className={StylesReservaExitosa.titulo}>Ya esta lista tu reserva</p>
    <article className={StylesReservaExitosa.articulo}>
        <div className={StylesReservaExitosa.div1}>
            <div className={StylesReservaExitosa.div1_1}> 
                <p className={StylesReservaExitosa.nombreProducto}>Vajilla Hyra Premium</p>
            </div>
            <div className={StylesReservaExitosa.div1_imagenes}>
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReservaExitosa.imagen} />
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReservaExitosa.imagen} />
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReservaExitosa.imagen} />
                <img src="https://dovet.es/wp-content/uploads/2017/01/gato-768x658.jpg"className={StylesReservaExitosa.imagen} />
            </div>

            <div className={StylesReservaExitosa.div1_fechas}>
                <div className={StylesReservaExitosa.div1_2_desde}>                  
                    <p className={StylesReservaExitosa.fechasSeleccionada}>Desde</p>
                    <p className={StylesReservaExitosa.fechasSeleccionada}>12/01/2024</p>             
                </div>
                <div className={StylesReservaExitosa.div1_2_hasta}>                  
                    <p className={StylesReservaExitosa.fechasSeleccionada}>Hasta</p>
                    <p className={StylesReservaExitosa.fechasSeleccionada}>12/01/2024</p>             
                </div>
            </div>
            
        </div>
        <div className={StylesReservaExitosa.div2}>
            <p className={StylesReservaExitosa.informacion}>Información del usuario</p>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.nombre}>Nombre</p>    
                <p className={StylesReservaExitosa.datosUsuario}>Fabrizio Rodriguez</p>
            </div>
            <div className={StylesReservaExitosa.div2_1}>
                <p className={StylesReservaExitosa.correo}>Correo</p>
                <p className={StylesReservaExitosa.datosUsuario}>Fabrizio@gmail.com</p>
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
                <p className={StylesReservaExitosa.datosUsuario}>S/ 160</p>
            </div>
        </div>            
    </article>
    <div className={StylesReservaExitosa.divBotones}>
        <button className={StylesReservaExitosa.botonCancelar}>Cancelar</button>
        <button className={StylesReservaExitosa.botonReservar}>Solicitar reserva</button>
    </div>
</section>
  )
}

export default ReservaExitosa